import servicioCompras from "../servicios/Compra.js";

class ControladorCompra {
  static async crearCompra(req, res) {
    try {
      const { proveedor, detallesCompra } = req.body;
      const nuevaCompra = await servicioCompras.crearCompra(
        proveedor,
        detallesCompra
      );
      res.status(201).json(nuevaCompra);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async obtenerCompras(req, res) {
    try {
      const compras = await servicioCompras.obtenerCompras();
      res.json(compras);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async obtenerComprasPorId(req, res) {
    try {
      const compra = await servicioCompras.obtenerCompraPorId(req.params.id);
      res.json(compra);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async actualizarCompra(req, res) {
    try {
      const { total, fecha } = req.body;
      const compraActualizada = await servicioCompras.actualizarCompra(
        req.params.id,
        total,
        fecha
      );
      res.json(compraActualizada);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default ControladorCompra;
