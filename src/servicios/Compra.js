
import repositoriocompras from "../repositorios/Compra.js";


class ServicioCompras {
  async crearCompra(total, fecha, proveedorId) {
    try {
      const nuevaCompra = { total, fecha, proveedorId };
      return await repositoriocompras.agregar(nuevaCompra);
    } catch (error) {
      throw new Error(`Error al crear la compra: ${error.message}`);
    }
  }

  async obtenerCompras() {
    try {
      return await repositoriocompras.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener las compras: ${error.message}`);
    }
  }

  async obtenerCompraPorId(id) {
    try {
      const compra = await repositoriocompras.obtenerPorId(id);
      if (!compra) throw new Error("compra no encontrada");
      return compra;
    } catch (error) {
      throw new Error(
        `Error al obtener la compra con ID ${id}: ${error.message}`
      );
    }
  }

  async actualizarCompra(id, total, fecha, proveedorId) {
    try {
      const datosActualizados = { total, fecha, proveedorId };
      return await repositoriocompras.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(
        `Error al actualizar la compra con ID ${id}: ${error.message}`
      );
    }
  }

}

const servicioCompras = new ServicioCompras();

export default servicioCompras;
