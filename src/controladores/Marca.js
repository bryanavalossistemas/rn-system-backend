import servicioMarca from "../servicios/Marca.js";

class ControladorMarca {
  static async crearMarca(req, res) {
    try {
      const { nombre } = req.body;
      const nuevaMarca = await servicioMarca.crearMarca(nombre);
      res.status(201).json(nuevaMarca);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async obtenerMarcas(req, res) {
    try {
      const marcas = await servicioMarca.obtenerMarcas();
      res.json(marcas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async obtenerMarcaPorId(req, res) {
    try {
      const marca = await servicioMarca.obtenerMarcaPorId(req.params.id);
      if (!marca) {
        return res.status(404).json({ message: "Marca no encontrada" });
      }
      res.json(marca);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async actualizarMarca(req, res) {
    try {
      const { nombre } = req.body;
      const marcaActualizada = await servicioMarca.actualizarMarca(req.params.id, nombre);
      if (!marcaActualizada) {
        return res.status(404).json({ message: "Marca no encontrada para actualizar" });
      }
      res.json(marcaActualizada);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async eliminarMarca(req, res) {
    try {
      const marcaEliminada = await servicioMarca.eliminarMarca(req.params.id);
      if (!marcaEliminada) {
        return res.status(404).json({ message: "Marca no encontrada para eliminar" });
      }
      res.json(marcaEliminada);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default ControladorMarca;
