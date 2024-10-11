import servicioImagenProducto from "../servicios/ImagenProducto.js";

class ControladorImagenProducto {
  static async crearImagenProducto(req, res) {
    try {
      const { url, publicidad } = req.body;
      const nuevaImagenProducto =
        await servicioImagenProducto.crearImagenProducto(url, publicidad);
      res.status(201).json(nuevaImagenProducto);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async obtenerImagenesProducto(req, res) {
    try {
      const imagenesProducto =
        await servicioImagenProducto.obtenerImagenesProducto();
      res.json(imagenesProducto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async obtenerImagenProductoPorId(req, res) {
    try {
      const imagenProducto =
        await servicioImagenProducto.obtenerImagenProductoPorId(req.params.id);
      if (!imagenProducto) {
        return res
          .status(404)
          .json({ message: "Imagen de producto no encontrada" });
      }
      res.json(imagenProducto);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async actualizarImagenProducto(req, res) {
    try {
      const { url, publicidad } = req.body;
      const imagenProductoActualizada =
        await servicioImagenProducto.actualizarImagenProducto(
          req.params.id,
          url,
          publicidad
        );
      res.json(imagenProductoActualizada);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async eliminarImagenProducto(req, res) {
    try {
      const imagenProductoEliminada =
        await servicioImagenProducto.eliminarImagenProducto(req.params.id);
      if (!imagenProductoEliminada) {
        return res
          .status(404)
          .json({ message: "Imagen de producto no encontrada para eliminar" });
      }
      res.json(imagenProductoEliminada);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default ControladorImagenProducto;
