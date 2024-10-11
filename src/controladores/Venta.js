import servicioVentas from "../servicios/Venta.js";

class ControladorVenta {
  static async crearVenta(req, res) {
    try {
      const { fecha, subtotal, igv, total, vendedorId, clienteId} = req.body;
      const nuevaVenta = await servicioVentas.crearVenta(fecha, subtotal, igv, total, vendedorId, clienteId);
      res.status(201).json(nuevaVenta);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async obtenerVentas(req, res) {
    try {
      const ventas = await servicioVentas.obtenerVentas();
      res.json(ventas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async obtenerVentaPorId(req, res) {
    try {
      const venta = await servicioVentas.obtenerVentaPorId(req.params.id);
      res.json(venta);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async modificarVentaPorId(req, res) {
    try {
      const { fecha, subtotal, igv, total, vendedorId, clienteId } = req.body;
      const ventaActualizada = await servicioVentas.modificarVentaPorId(
        req.params.id,
        fecha,
        subtotal,
        igv,
        total,
        vendedorId,
        clienteId
      );
      res.json(ventaActualizada);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async eliminarVentaPorId(req, res) {
    try {
      const ventaEliminada = await servicioVentas.eliminarVentaPorId(req.params.id);
      res.json(ventaEliminada);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default ControladorVenta;
