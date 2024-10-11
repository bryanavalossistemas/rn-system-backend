import repositorioVentas from "../repositorios/Venta.js";

class ServicioVentas {
  async crearVenta(fecha, subtotal, igv, total, vendedorId, clienteId, detalles) {
    try {
      const nuevaVenta = { fecha, subtotal, igv, total, vendedorId, clienteId };
      const venta = await repositorioVentas.agregar(nuevaVenta);

      if (detalles && detalles.length > 0) {
        for (const detalle of detalles) {
          await repositorioVentas.agregarDetalle({
            ventaId: venta.id,
            productoId: detalle.productoId,
            cantidad: detalle.cantidad,
            monto: detalle.monto,
          });
        }
      }

      return venta;
    } catch (error) {
      throw new Error(`Error al crear la venta: ${error.message}`);
    }
  }

  async obtenerVentas() {
    try {
      return await repositorioVentas.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener las ventas: ${error.message}`);
    }
  }

  async obtenerVentaPorId(id) {
    try {
      const venta = await repositorioVentas.obtenerPorId(id);
      if (!venta) throw new Error("Venta no encontrada");
      return venta;
    } catch (error) {
      throw new Error(`Error al obtener la venta con ID ${id}: ${error.message}`);
    }
  }

  async modificarVentaPorId(id, fecha, subtotal, igv, total, vendedorId, clienteId) {
    try {
      const datosActualizados = { fecha, subtotal, igv, total, vendedorId, clienteId };
      return await repositorioVentas.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(`Error al actualizar la venta con ID ${id}: ${error.message}`);
    }
  }

  async eliminarVentaPorId(id) {
    try {
      return await repositorioVentas.eliminar(id);
    } catch (error) {
      throw new Error(`Error al eliminar la venta con ID ${id}: ${error.message}`);
    }
  }
}

const servicioVentas = new ServicioVentas();
export default servicioVentas;
