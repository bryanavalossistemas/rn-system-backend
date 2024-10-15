import repositorioProductos from "../repositorios/Producto.js";
import repositorioCategoria from "../repositorios/Categoria.js";
import repositorioMarca from "../repositorios/Marca.js";
import repositorioImagenProducto from "../repositorios/ImagenProducto.js";
import { cloudinary } from "../utilidades/Cloudinary.js";

class ServicioProducto {
  async crearProducto(
    nombre,
    precioCosto,
    precioVenta,
    stock,
    categoriaId,
    marcaId,
    file
  ) {
    try {
      const categoria = await repositorioCategoria.obtenerPorId(categoriaId);
      const marca = await repositorioMarca.obtenerPorId(marcaId);
      if (!categoria) {
        throw new Error("La categoria especificada no existe.");
      }
      if (!marca) {
        throw new Error("La marca especificada no existe.");
      }
      if (precioCosto <= 0 || precioVenta <= 0 || stock <= 0) {
        throw new Error("Datos numéricos deben ser mayor a 0");
      }

      const result = await cloudinary.uploader.upload(file.path);
      const nuevaImagenProducto = {
        url: result.url,
        publicId: result.public_id,
      };
      const imagenProducto = await repositorioImagenProducto.agregar(
        nuevaImagenProducto
      );

      const nuevoProducto = {
        nombre,
        precioCosto,
        precioVenta,
        stock,
        categoriaId,
        marcaId,
        imagenProductoId: imagenProducto.id,
      };

      return await repositorioProductos.agregar(nuevoProducto);
    } catch (error) {
      throw new Error(`Error al crear el producto: ${error.message}`);
    }
  }

  async obtenerProductos() {
    try {
      return await repositorioProductos.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener los productos: ${error.message}`);
    }
  }

  async obtenerProductoPorId(id) {
    try {
      const producto = await repositorioProductos.obtenerPorId(id);
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
    file
  ) {
    try {
      const categoria = await repositorioCategoria.obtenerPorId(categoriaId);
      const marca = await repositorioMarca.obtenerPorId(marcaId);
      if (!categoria) {
        throw new Error("La categoria especificada no existe.");
      }
      if (!marca) {
        throw new Error("La marca especificada no existe.");
      }
      if (file) {
        const producto = await repositorioProductos.obtenerPorId(id);
        const imagenProducto = await repositorioImagenProducto.obtenerPorId(
          producto.imagenProductoId
        );
        await cloudinary.uploader.destroy(imagenProducto.publicId);

        const result = await cloudinary.uploader.upload(file.path);
        const nuevaImagenProducto = {
          url: result.url,
          publicId: result.public_id,
        };
        const imagenProductoNuevo = await repositorioImagenProducto.agregar(
          nuevaImagenProducto
        );
        const datosActualizados = {
          nombre,
          precioCosto,
          precioVenta,
          stock,
          categoriaId,
          marcaId,
          imagenProductoId: imagenProductoNuevo.id,
        };
        const productoActualizado = await repositorioProductos.actualizar(
          id,
          datosActualizados
        );
        repositorioImagenProducto.eliminar(imagenProducto.id);

        return await productoActualizado;
      }
      const datosActualizados = {
        nombre,
        precioCosto,
        precioVenta,
        stock,
        categoriaId,
        marcaId,
      };
      return await repositorioProductos.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(
        `Error al actualizar el producto con ID ${id}: ${error.message}`
      );
    }
  }

  async eliminarProducto(id) {
    try {
      const productoEliminado = await repositorioProductos.eliminar(id);
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
