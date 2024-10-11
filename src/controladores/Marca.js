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

  // static async obtenerCategoriaPorId(req, res) {
  //   try {
  //     const categoria = await servicioMarca.obtenerCategoriaPorId(
  //       req.params.id
  //     );
  //     res.json(categoria);
  //   } catch (error) {
  //     res.status(404).json({ message: error.message });
  //   }
  // }

  // static async actualizarCategoria(req, res) {
  //   try {
  //     const { nombre } = req.body;
  //     const categoriaActualizada = await servicioMarca.actualizarCategoria(
  //       req.params.id,
  //       nombre
  //     );
  //     res.json(categoriaActualizada);
  //   } catch (error) {
  //     res.status(400).json({ message: error.message });
  //   }
  // }

  // static async eliminarCategoria(req, res) {
  //   try {
  //     const categoriaEliminada = await servicioMarca.eliminarCategoria(
  //       req.params.id
  //     );
  //     res.json(categoriaEliminada);
  //   } catch (error) {
  //     res.status(404).json({ message: error.message });
  //   }
  // }
}

export default ControladorMarca;
