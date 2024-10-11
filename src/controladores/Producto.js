import servicioProducto from "../servicios/Producto.js";

class ControladorProducto {
  static async crearProducto(req, res) {
    try {
      const { file } = req;
      const { nombre, precioCosto, precioVenta, stock, categoriaId, marcaId } =
        req.body;

      const nuevoProducto = await servicioProducto.crearProducto(
        nombre,
        precioCosto,
        precioVenta,
        stock,
        categoriaId,
        marcaId,
        file
      );
      res.status(201).json(nuevoProducto);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async obtenerProductos(req, res) {
    try {
      const productos = await servicioProducto.obtenerProductos();
      res.json(productos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async obtenerProductoPorId(req, res) {
    try {
      const producto = await servicioProducto.obtenerProductoPorId(
        req.params.id
      );
      if (!producto) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      res.json(producto);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async actualizarProducto(req, res) {
    try {
      const { file } = req;
      const { nombre, precioCosto, precioVenta, stock, categoriaId, marcaId } =
        req.body;

      const productoActualizado = await servicioProducto.actualizarProducto(
        req.params.id,
        nombre,
        precioCosto,
        precioVenta,
        stock,
        categoriaId,
        marcaId,
        file
      );
      res.json(productoActualizado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async eliminarProducto(req, res) {
    try {
      const productoEliminado = await servicioProducto.eliminarProducto(
        req.params.id
      );
      if (!productoEliminado) {
        return res
          .status(404)
          .json({ message: "Producto no encontrado para eliminar" });
      }
      res.json(productoEliminado);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default ControladorProducto;
