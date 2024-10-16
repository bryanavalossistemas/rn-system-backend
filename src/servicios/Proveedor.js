import repositorioProveedor from "../repositorios/Proveedor.js";

class ServicioProveedor {
  async crearProveedor(nombre, ruc, telefono, direccion) {
    try {
      const proveedorRUCExiste = await repositorioProveedor.obtenerPorRUC(ruc);
      if (proveedorRUCExiste) {
        throw new Error(`Ya existe un proveedor con ruc: ${ruc}`);
      }
      const proveedorTelefonoExiste = await repositorioProveedor.obtenerPorTelefono(telefono);
      if (proveedorTelefonoExiste) {
        throw new Error(`Ya existe un proveedor con el telefono: ${telefono}`);
      }
      const nuevoProveedor = { nombre, ruc, telefono, direccion };
      const proveedorCreado = await repositorioProveedor.agregar(
        nuevoProveedor
      );
      return {
        ok: true,
        message: proveedorCreado,
      };
    } catch (error) {
      throw new Error(`Error al crear el proveedor: ${error.message}`);
    }
  }

  async obtenerProveedores() {
    try {
      return await repositorioProveedor.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener los proveedores: ${error.message}`);
    }
  }

  async obtenerProveedorPorId(id) {
    try {
      const proveedor = await repositorioProveedor.obtenerPorId(id);
      if (!proveedor) throw new Error("proveedor no encontrado");
      return proveedor;
    } catch (error) {
      throw new Error(
        `Error al obtener la proveedor con ID ${id}: ${error.message}`
      );
    }
  }

  async actualizarProveedor(id, nombre, ruc, telefono, direccion) {
    try {      
      const datosActualizados = { nombre, ruc, telefono, direccion };
      return await repositorioProveedor.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(
        `Error al actualizar el proveedor con ID ${id}: ${error.message}`
      );
    }
  }

  async eliminarProveedor(id) {
    try {
      const proveedorEliminado = await repositorioProveedor.eliminar(id);
      if (!proveedorEliminado)
        throw new Error("Proveedor no encontrado para eliminar");
      return proveedorEliminado;
    } catch (error) {
      throw new Error(
        `Error al eliminar el proveedor con ID ${id}: ${error.message}`
      );
    }
  }
}

const servicioProveedor = new ServicioProveedor();

export default servicioProveedor;
