import RepositorioBase from "./Base.js";
import ModeloProducto from "../modelos/Producto.js";
import ModeloCategoria from "../modelos/Categoria.js";
import ModeloMarca from "../modelos/Marca.js";
import ModeloImagenProducto from "../modelos/ImagenProducto.js";

class RepositorioProducto extends RepositorioBase {
  constructor() {
    super(ModeloProducto);
  }

  obtenerTodos = async () => {
    try {
      const productos = await this.model.findAll({
        include: [
          { model: ModeloCategoria, as: "categoria" },
          { model: ModeloMarca, as: "marca" },
          { model: ModeloImagenProducto, as: "imagenProducto" },
        ],
        order: [["id", "ASC"]],
      });
      const res = productos.map((producto) => {
        return {
          id: producto.id,
          nombre: producto.nombre,
          categoria: producto.categoria.nombre,
          marca: producto.marca.nombre,
          precioCosto: producto.precioCosto,
          precioVenta: producto.precioVenta,
          stock: producto.stock,
          imagenProducto: producto.imagenProducto.url,
          categoriaId: producto.categoriaId,
          marcaId: producto.marcaId,
        };
      });
      return res;
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener elementos: ${error.message}`
      );
    }
  };
}

const repositorioProducto = new RepositorioProducto();

export default repositorioProducto;
