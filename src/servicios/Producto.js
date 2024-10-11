import repositorioproductos from "../repositorios/Producto.js";
import repositorioCategoria from "../repositorios/Categoria.js";
import repositorioMarca from "../repositorios/Marca.js";
import repositorioImagenProducto from "../repositorios/ImagenProducto.js";

class ServicioProducto {
  async crearProducto(
    nombre,
    precioCosto,
    precioVenta,
    stock,
    categoriaId,
    marcaId,
    imagenProductoId
  ) {
    try {
      // Verificar si las relaciones existen
      const categoria = await repositorioCategoria.obtenerPorId(categoriaId);
      const marca = await repositorioMarca.obtenerPorId(marcaId);
      const imagenProducto = await repositorioImagenProducto.obtenerPorId(
        imagenProductoId
      );

      if (!categoria) {
        throw new Error("La categoria especificada no existe.");
      }
      if (!marca) {
        throw new Error("La marca especificada no existe.");
      }
      if (!imagenProducto) {
        throw new Error("La imagen de producto especificada no existe.");
      }

      const nuevoProducto = {
        nombre,
        precioCosto,
        precioVenta,
        stock,
        categoriaId,
        marcaId,
        imagenProductoId,
      };

      return await repositorioproductos.agregar(nuevoProducto);
    } catch (error) {
      throw new Error(`Error al crear el producto: ${error.message}`);
    }
  }

  async obtenerProductos() {
    try {
      return await repositorioproductos.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener los productos: ${error.message}`);
    }
  }

  async obtenerProductoPorId(id) {
    try {
      const producto = await repositorioproductos.obtenerPorId(id);
      if (!producto) throw new Error("Producto no encontrado");
      return producto;
    } catch (error) {
      throw new Error(
        `Error al obtener el producto con ID ${id}: ${error.message}`
      );
    }
  }

  async actualizarProducto(
    id,
    nombre,
    precioCosto,
    precioVenta,
    stock,
    categoriaId,
    marcaId,
    imagenProductoId
  ) {
    try {
      // Verificar si las relaciones existen antes de actualizar
      const categoria = await repositorioCategoria.obtenerPorId(categoriaId);
      const marca = await repositorioMarca.obtenerPorId(marcaId);
      const imagenProducto = await repositorioImagenProducto.obtenerPorId(
        imagenProductoId
      );

      if (!categoria) {
        throw new Error("La categoria especificada no existe.");
      }
      if (!marca) {
        throw new Error("La marca especificada no existe.");
      }
      if (!imagenProducto) {
        throw new Error("La imagen de producto especificada no existe.");
      }

      const datosActualizados = {
        nombre,
        precioCosto,
        precioVenta,
        stock,
        categoriaId,
        marcaId,
        imagenProductoId,
      };

      return await repositorioproductos.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(
        `Error al actualizar el producto con ID ${id}: ${error.message}`
      );
    }
  }

  async eliminarProducto(id) {
    try {
      const productoEliminado = await repositorioproductos.eliminar(id);
      if (!productoEliminado)
        throw new Error("Producto no encontrado para eliminar");
      return productoEliminado;
    } catch (error) {
      throw new Error(
        `Error al eliminar el producto con ID ${id}: ${error.message}`
      );
    }
  }
}

const servicioProducto = new ServicioProducto();

export default servicioProducto;
