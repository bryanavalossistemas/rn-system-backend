
import repositorioproveedor from "../repositorios/Proveedor.js";


class ServicioProveedor {
  async crearProveedor(nombre,ruc,telefono, direccion) {
    try {
      const nuevoProveedor = { nombre, ruc, telefono, direccion };
      return await repositorioproveedor.agregar(nuevoProveedor);
    } catch (error) {
      throw new Error(`Error al crear el proveedor: ${error.message}`);
    }
  }

  async obtenerProveedores() {
    try {
      return await repositorioproveedor.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener los proveedores: ${error.message}`);
    }
  }

  async obtenerProveedorPorId(id) {
    try {
      const proveedor = await repositorioproveedor.obtenerPorId(id);
      if (!proveedor) throw new Error("proveedor no encontrado");
      return proveedor;
    } catch (error) {
      throw new Error(
        `Error al obtener la proveedor con ID ${id}: ${error.message}`
      );
    }
  }

  async actualizarProveedor(id, nombre,ruc,telefono, direccion) {
    try {
      const datosActualizados = { nombre,ruc,telefono, direccion};
      return await repositorioproveedor.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(
        `Error al actualizar la compra con ID ${id}: ${error.message}`
      );
    }
  }


  async eliminarProveedor(id) {
    try {
      const proveedorEliminado = await repositorioproveedor.eliminar(id);
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
