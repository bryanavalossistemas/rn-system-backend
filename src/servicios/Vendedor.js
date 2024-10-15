import repositorioVendedor from "../repositorios/Vendedor.js";
import repositorioUsuario from "../repositorios/Usuario.js";
import { encriptarContrasenia } from "../funciones/funciones.js";

class ServicioVendedor {
  async crearVendedor(nombre, usuario, contrasenia, dni, telefono) {
    try {
      const usuarioExiste = await repositorioUsuario.obtenerPorUsuario(usuario);
      if (usuarioExiste) {
        throw new Error(`Ya existe un vendedor con usuario: ${usuario}`);
      }
      const vendedorExiste = await repositorioVendedor.obtenerPorDNI(dni);
      if (vendedorExiste) {
        throw new Error(`Ya existe un vendedor con dni: ${dni}`);
      }
      const contraseniaEncriptada = await encriptarContrasenia(contrasenia);
      const nuevoUsuario = {
        nombre,
        usuario,
        contrasenia: contraseniaEncriptada,
        rolId: 2,
      };
      const usuarioCreado = await repositorioUsuario.agregar(nuevoUsuario);
      const nuevoVendedor = { dni, telefono, usuarioId: usuarioCreado.id };
      const vendedorCreado = await repositorioVendedor.agregar(nuevoVendedor);
      return {
        ok: true,
        message: vendedorCreado,
      };
    } catch (error) {
      throw new Error(`Error al crear el vendedor: ${error.message}`);
    }
  }

  async obtenerVendedores() {
    try {
      return await repositorioVendedor.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener los vendedores: ${error.message}`);
    }
  }

  async obtenerVendedorPorUsuarioId(usuarioId) {
    try {
      const vendedor = await repositorioVendedor.obtenerPorUsuarioId(usuarioId);
      if (!vendedor) throw new Error("Vendedor no encontrado");
      return vendedor;
    } catch (error) {
      throw new Error(
        `Error al obtener el vendedor con el usuario con ID ${id}: ${error.message}`
      );
    }
  }

  async obtenerVendedorPorDNI(dni) {
    try {
      const vendedor = await repositorioVendedor.obtenerPorDNI(dni);
      if (!vendedor) throw new Error("Vendedor no encontrado");
      return vendedor;
    } catch (error) {
      throw new Error(
        `Error al obtener el vendedor con el DNI: ${dni}: ${error.message}`
      );
    }
  }
}

const servicioVendedor = new ServicioVendedor();

export default servicioVendedor;
