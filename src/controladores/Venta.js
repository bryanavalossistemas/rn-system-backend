import servicioVenta from "../servicios/Venta.js";

class ControladorVenta {
  static async crearVenta(req, res) {
    try {
      const { cliente, detallesVenta } = req.body;
      const nuevaVenta = await servicioVenta.crearVenta(cliente, detallesVenta);
      res.status(201).json(nuevaVenta);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async obtenerVentas(req, res) {
    try {
      const ventas = await servicioVenta.obtenerVentas();
      res.json(ventas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async obtenerVentaPorId(req, res) {
    try {
      const venta = await servicioVenta.obtenerVentaPorId(req.params.id);
      res.json(venta);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async modificarVentaPorId(req, res) {
    try {
      const { fecha, subtotal, igv, total, clienteId } = req.body;
      const ventaActualizada = await servicioVenta.modificarVentaPorId(
        req.params.id,
        fecha,
        subtotal,
        igv,
        total,
        clienteId
      );
      res.json(ventaActualizada);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async eliminarVentaPorId(req, res) {
    try {
      const ventaEliminada = await servicioVenta.eliminarVentaPorId(
        req.params.id
      );
      res.json(ventaEliminada);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default ControladorVenta;
