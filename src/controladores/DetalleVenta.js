import servicioDetalleVenta from "../servicios/DetalleVenta.js";

class ControladorDetalleVenta {
  static async crearDetalleVenta(req, res) {
    try {
      const { cantidad, monto, ventaId, productoId } = req.body;
      const nuevoDetalleVenta = await servicioDetalleVenta.crearDetalleVenta(cantidad, monto, ventaId, productoId );
      res.status(201).json(nuevoDetalleVenta);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async obtenerDetalleVenta(req, res) {
    try {
      const detalleVenta = await servicioDetalleVenta.obtenerDetalleVenta();
      res.json(detalleVenta);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async obtenerDetalleVentaPorId(req, res) {
    try {
      const detalleVenta = await servicioDetalleVenta.obtenerDetalleVentaPorId(req.params.id);
      res.json(detalleVenta);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async actualizarDetalleVenta(req, res) {
    try {
      const { cantidad, monto, ventaId, productoId } = req.body;
      const detalleVentaActualizada = await servicioDetalleVenta.actualizarDetalleVenta(
        req.params.id,
        cantidad,
        monto,
        ventaId,
        productoId
      );
      res.json(detalleVentaActualizada);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

}

export default ControladorDetalleVenta;
