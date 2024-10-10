import servicioCategoria from "../servicios/Categoria.js";

class ControladorCategoria {
  static async crearCategoria(req, res) {
    try {
      const { nombre } = req.body;
      const nuevoCategoria = await servicioCategoria.crearCategoria(nombre);
      res.status(201).json(nuevoCategoria);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async obtenerCategorias(req, res) {
    try {
      const categorias = await servicioCategoria.obtenerCategorias();
      res.json(categorias);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async obtenerCategoriaPorId(req, res) {
    try {
      const categoria = await servicioCategoria.obtenerCategoriaPorId(
        req.params.id
      );
      res.json(categoria);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async actualizarCategoria(req, res) {
    try {
      const { nombre } = req.body;
      const categoriaActualizada = await servicioCategoria.actualizarCategoria(
        req.params.id,
        nombre
      );
      res.json(categoriaActualizada);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async eliminarCategoria(req, res) {
    try {
      const categoriaEliminada = await servicioCategoria.eliminarCategoria(
        req.params.id
      );
      res.json(categoriaEliminada);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default ControladorCategoria;
