import repositorioCliente from "../repositorios/Cliente.js";

class ServicioCliente {
  async crearCliente(nombre, celular, ruc) {
    try {
      const vendedorConCelularExiste =
        await repositorioCliente.obtenerPorCelular(celular);
      if (vendedorConCelularExiste) {
        throw new Error(`Ya existe un cliente con celular: ${celular}`);
      }
      const vendedorConRucExiste = await repositorioCliente.obtenerPorRUC(ruc);
      if (vendedorConRucExiste) {
        throw new Error(`Ya existe un cliente con ruc: ${ruc}`);
      }
      const nuevoCliente = { nombre, celular, ruc };
      const clienteCreado = await repositorioCliente.agregar(nuevoCliente);
      return {
        ok: true,
        message: clienteCreado,
      };
    } catch (error) {
      throw new Error(`Error al crear el cliente: ${error.message}`);
    }
  }

  async obtenerClientes() {
    try {
      return await repositorioCliente.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener los clientes: ${error.message}`);
    }
  }

  async obtenerClientePorId(id) {
    try {
      const cliente = await repositorioCliente.obtenerPorId(id);
      if (!cliente) throw new Error("Cliente no encontrado");
      return cliente;
    } catch (error) {
      throw new Error(
        `Error al obtener el cliente con ID ${id}: ${error.message}`
      );
    }
  }

  async actualizarCliente(id, nombre, celular, ruc) {
    try {
      const clienteConCelularExiste =
        await repositorioCliente.obtenerPorCelular(celular);
      if (clienteConCelularExiste && clienteConCelularExiste.id != id) {
        throw new Error(`Ya existe un cliente con celular: ${celular}`);
      }
      const clienteConRucExiste = await repositorioCliente.obtenerPorRUC(ruc);
      if (clienteConRucExiste && clienteConRucExiste.id != id) {
        throw new Error(`Ya existe un cliente con ruc: ${ruc}`);
      }
      const datosActualizados = { nombre, celular, ruc };
      const clienteActualizado = await repositorioCliente.actualizar(
        id,
        datosActualizados
      );
      return {
        ok: true,
        message: clienteActualizado,
      };
    } catch (error) {
      throw new Error(`Error al actualizar el cliente: ${error.message}`);
    }
  }

  async eliminarClientePorId(id) {
    try {
      return await repositorioCliente.eliminar(id);
    } catch (error) {
      throw new Error(
        `Error al eliminar el cliente con ID ${id}: ${error.message}`
      );
    }
  }
}

const servicioCliente = new ServicioCliente();
export default servicioCliente;
