import servicioDetalleCompra from "../servicios/DetalleCompra.js";

class ControladorDetalleCompra {
  static async crearDetalleCompra(req, res) {
    try {
      const { cantidad, monto, compraId, productoId } = req.body;
      const nuevoDetalleCompra = await servicioDetalleCompra.crearDetalleCompra(cantidad, monto, compraId, productoId );
      res.status(201).json(nuevoDetalleCompra);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async obtenerDetalleCompras(req, res) {
    try {
      const detalleCompra = await servicioDetalleCompra.obtenerDetalleCompras();
      res.json(detalleCompra);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async obtenerDetalleCompraPorId(req, res) {
    try {
      const detalleCompra = await servicioDetalleCompra.obtenerDetalleCompraPorId(req.params.id);
      res.json(detalleCompra);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async actualizarDetalleCompra(req, res) {
    try {
      const { cantidad, monto, compraId, productoId } = req.body;
      const detalleCompraActualizada = await servicioDetalleCompra.actualizarDetalleCompra(
        req.params.id,
        cantidad,
        monto,
        compraId,
        productoId
      );
      res.json(detalleCompraActualizada);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

}

export default ControladorDetalleCompra;
