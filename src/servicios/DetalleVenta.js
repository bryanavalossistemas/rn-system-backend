import repositorioDetalleVenta from "../repositorios/DetalleVenta.js";

class ServicioDetalleVenta {
  async crearDetalleVenta(cantidad, precioVenta, ventaId, productoId) {
    try {
      const nuevoDetalleVenta = { cantidad, precioVenta, ventaId, productoId };
      return await repositorioDetalleVenta.agregar(nuevoDetalleVenta);
    } catch (error) {
      throw new Error(
        `Error al crear el detalle de la venta: ${error.message}`
      );
    }
  }

  async obtenerDetalleVenta() {
    try {
      return await repositorioDetalleVenta.obtenerTodos();
    } catch (error) {
      throw new Error(
        `Error al obtener los detalles de las ventas: ${error.message}`
      );
    }
  }

  async obtenerDetalleVentaPorId(id) {
    try {
      const detalleVenta = await repositorioDetalleVenta.obtenerPorId(id);
      if (!detalleVenta) throw new Error("detalle de venta no encontrado");
      return detalleVenta;
    } catch (error) {
      throw new Error(
        `Error al obtener la compra con ID ${id}: ${error.message}`
      );
    }
  }

  async actualizarDetalleVenta(id, cantidad, precioVenta, ventaId, productoId) {
    try {
      const datosActualizados = { cantidad, precioVenta, ventaId, productoId };
      return await repositorioDetalleVenta.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(
        `Error al actualizar el detalle de la venta con ID ${id}: ${error.message}`
      );
    }
  }
}

const servicioDetalleVenta = new ServicioDetalleVenta();

export default servicioDetalleVenta;
