import repositorioUsuario from "../repositorios/Usuario.js";
import { generarJWT, verificarContrasenia } from "../funciones/funciones.js";

class ServicioUsuario {
  async crearUsuario(nombre, usuario, contrasenia, rolId) {
    try {
      const nuevoUsuario = { nombre, usuario, contrasenia, rolId };
      return await repositorioUsuario.agregar(nuevoUsuario);
    } catch (error) {
      throw new Error(`Error al crear el usuario: ${error.message}`);
    }
  }

  async obtenerUsuarios() {
    try {
      return await repositorioUsuario.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener los usuarios: ${error.message}`);
    }
  }

  async obtenerUsuarioPorId(id) {
    try {
      const usuario = await repositorioUsuario.obtenerPorId(id);
      if (!usuario) throw new Error("Usuario no encontrado");
      return usuario;
    } catch (error) {
      throw new Error(
        `Error al obtener el usuario con ID ${id}: ${error.message}`
      );
    }
  }

  async actualizarUsuario(id, nombre, usuario, contrasenia, rolId) {
    try {
      const datosActualizados = { nombre, usuario, contrasenia, rolId };
      return await repositorioUsuario.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(
        `Error al actualizar el usuario con ID ${id}: ${error.message}`
      );
    }
  }

  async eliminarUsuario(id) {
    try {
      const usuarioEliminado = await repositorioUsuario.eliminar(id);
      if (!usuarioEliminado)
        throw new Error("Usuario no encontrado para eliminar");
      return usuarioEliminado;
    } catch (error) {
      throw new Error(
        `Error al eliminar el usuario con ID ${id}: ${error.message}`
      );
    }
  }

  async iniciarSesion(usuario, contrasenia) {
    try {
      const usuarioEncontrado = await repositorioUsuario.obtenerPorUsuario(
        usuario
      );
      if (!usuarioEncontrado) {
        throw new Error("Datos no válidos");
      }
      const contraseniaEsValida = await verificarContrasenia(
        contrasenia,
        usuarioEncontrado.contrasenia
      );
      if (!contraseniaEsValida) {
        throw new Error("Datos no válidos");
      }
      return {
        ok: true,
        token: generarJWT({ usuarioId: usuarioEncontrado.id }),
        rolId: usuarioEncontrado.rolId,
      };
    } catch (error) {
      throw new Error(`Error al iniciar sesión: ${error.message}`);
    }
  }
}

const servicioUsuario = new ServicioUsuario();

export default servicioUsuario;
