import repositorioAdministrador from "../repositorios/Administrador.js";
import repositorioUsuario from "../repositorios/Usuario.js";
import repositorioVendedor from "../repositorios/Vendedor.js";
import { encriptarContraseña } from "../funciones/funciones.js";

class ServicioAdministrador {
  async crearAdministrador(nombre, usuario, contrasenia) {
    try {
      const contraseniaEncriptada = await encriptarContraseña(contrasenia);
      const nuevoUsuario = {
        nombre,
        usuario,
        contrasenia: contraseniaEncriptada,
        rolId: 1,
      };
      const usuarioCreado = await repositorioUsuario.agregar(nuevoUsuario);
      const nuevoAdministrador = { usuarioId: usuarioCreado.id };
      return await repositorioAdministrador.agregar(nuevoAdministrador);
    } catch (error) {
      throw new Error(`Error al crear el administrador: ${error.message}`);
    }
  }

  async actualizarAdministrador(id, nombre, usuario, contrasenia) {
    try {
      const administrador = await repositorioAdministrador.obtenerPorId(id);
      const datosActualizados = { nombre, usuario, contrasenia };
      await repositorioUsuario.actualizar(
        administrador.usuarioId,
        datosActualizados
      );
      return administrador;
    } catch (error) {
      throw new Error(
        `Error al actualizar el administrador con ID ${id}: ${error.message}`
      );
    }
  }

  async crearVendedor(nombre, usuario, contrasenia, dni, telefono) {
    try {
      const contraseniaEncriptada = await encriptarContraseña(contrasenia);
      const nuevoUsuario = {
        nombre,
        usuario,
        contrasenia: contraseniaEncriptada,
        rolId: 2,
      };
      const usuarioCreado = await repositorioUsuario.agregar(nuevoUsuario);
      const nuevoVendedor = { dni, telefono, usuarioId: usuarioCreado.id };
      return await repositorioVendedor.agregar(nuevoVendedor);
    } catch (error) {
      throw new Error(`Error al crear el vendedor: ${error.message}`);
    }
  }

  async actualizarVendedor(id, nombre, usuario, contrasenia, dni, telefono) {
    try {
      if (contrasenia) {
        contrasenia = await encriptarContraseña(contrasenia);
      }
      const vendedor = await repositorioVendedor.obtenerPorId(id);
      const datosUsuarioActualizados = {
        nombre,
        usuario,
        contrasenia: contrasenia || undefined,
      };
      await repositorioUsuario.actualizar(
        vendedor.usuarioId,
        datosUsuarioActualizados
      );
      const datosVendedorActualizados = { dni, telefono };
      return await repositorioVendedor.actualizar(
        vendedor.id,
        datosVendedorActualizados
      );
    } catch (error) {
      throw new Error(`Error al actualizar el vendedor: ${error.message}`);
    }
  }

  async eliminarVendedor(id) {
    try {
      const vendedorEliminado = await repositorioVendedor.eliminar(id);
      if (!vendedorEliminado)
        throw new Error("Vendedor no encontrado para eliminar");
      return vendedorEliminado;
    } catch (error) {
      throw new Error(
        `Error al eliminar el vendedor con ID ${id}: ${error.message}`
      );
    }
  }
}

const servicioAdministrador = new ServicioAdministrador();

export default servicioAdministrador;
