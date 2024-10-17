import repositorioProveedor from "../repositorios/Proveedor.js";

class ServicioProveedor {
  async crearProveedor(nombre, ruc, telefono, celular, direccion) {
    try {
      const proveedorConNombreExiste =
        await repositorioProveedor.obtenerPorNombre(nombre);
      if (proveedorConNombreExiste) {
        throw new Error(`Ya existe un proveedor con nombre: ${nombre}`);
      }
      const proveedorConRucExiste = await repositorioProveedor.obtenerPorRUC(
        ruc
      );
      if (proveedorConRucExiste) {
        throw new Error(`Ya existe un proveedor con ruc: ${ruc}`);
      }
      const proveedorConTelefonoExiste =
        await repositorioProveedor.obtenerPorTelefono(telefono);
      if (proveedorConTelefonoExiste) {
        throw new Error(`Ya existe un proveedor con teléfono: ${telefono}`);
      }
      const proveedorConCelularExiste =
        await repositorioProveedor.obtenerPorCelular(celular);
      if (proveedorConCelularExiste) {
        throw new Error(`Ya existe un proveedor con celular: ${celular}`);
      }
      const nuevoProveedor = { nombre, ruc, telefono, celular, direccion };
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

  async actualizarProveedor(id, nombre, ruc, telefono, celular, direccion) {
    try {
      const proveedorConNombreExiste =
        await repositorioProveedor.obtenerPorNombre(nombre);
      if (proveedorConNombreExiste && proveedorConNombreExiste.id != id) {
        throw new Error(`Ya existe un proveedor con nombre: ${nombre}`);
      }
      const proveedorConRucExiste = await repositorioProveedor.obtenerPorRUC(
        ruc
      );
      if (proveedorConRucExiste && proveedorConRucExiste.id != id) {
        throw new Error(`Ya existe un proveedor con ruc: ${ruc}`);
      }
      const proveedorConTelefonoExiste =
        await repositorioProveedor.obtenerPorTelefono(telefono);
      if (proveedorConTelefonoExiste && proveedorConTelefonoExiste.id != id) {
        throw new Error(`Ya existe un proveedor con teléfono: ${telefono}`);
      }
      const proveedorConCelularExiste =
        await repositorioProveedor.obtenerPorCelular(celular);
      if (proveedorConCelularExiste && proveedorConCelularExiste.id != id) {
        throw new Error(`Ya existe un proveedor con celular: ${celular}`);
      }
      const datosActualizados = { nombre, ruc, telefono, celular, direccion };
      const proveedorActualizado = await repositorioProveedor.actualizar(
        id,
        datosActualizados
      );
      return {
        ok: true,
        message: proveedorActualizado,
      };
    } catch (error) {
      throw new Error(`Error al crear el proveedor: ${error.message}`);
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
