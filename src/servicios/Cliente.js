import repositorioCliente from "../repositorios/Cliente.js";

class ServicioCliente {
  async crearCliente(nombre, telefono, ruc) {
    try {
      const vendedorExiste = await repositorioCliente.obtenerPorRUC(ruc);
      if (vendedorExiste) {
        throw new Error(`Ya existe un cliente con ruc: ${ruc}`);
      }
      const nuevoCliente = { nombre, telefono, ruc };
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

  async modificarClientePorId(id, nombre, telefono, ruc) {
    try {
      const datosActualizados = { nombre, telefono, ruc };
      return await repositorioCliente.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(
        `Error al actualizar el cliente con ID ${id}: ${error.message}`
      );
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
