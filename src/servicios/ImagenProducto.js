import repositorioImagenProducto from "../repositorios/ImagenProducto.js";

class ServicioImagenProducto {
  async crearImagenProducto(url, publicId) {
    try {
      const nuevaImagenProducto = { url, publicId };
      return await repositorioImagenProducto.agregar(nuevaImagenProducto);
    } catch (error) {
      throw new Error(
        `Error al crear la imagen del producto: ${error.message}`
      );
    }
  }

  async obtenerImagenesProducto() {
    try {
      return await repositorioImagenProducto.obtenerTodos();
    } catch (error) {
      throw new Error(
        `Error al obtener las imágenes de productos: ${error.message}`
      );
    }
  }

  async obtenerImagenProductoPorId(id) {
    try {
      const imagenProducto = await repositorioImagenProducto.obtenerPorId(id);
      if (!imagenProducto) throw new Error("Imagen de producto no encontrada");
      return imagenProducto;
    } catch (error) {
      throw new Error(
        `Error al obtener la imagen del producto con ID ${id}: ${error.message}`
      );
    }
  }

  async actualizarImagenProducto(id, url, publicidad) {
    try {
      const datosActualizados = { url, publicidad };
      return await repositorioImagenProducto.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(
        `Error al actualizar la imagen del producto con ID ${id}: ${error.message}`
      );
    }
  }

  async eliminarImagenProducto(id) {
    try {
      const imagenProductoEliminada = await repositorioImagenProducto.eliminar(
        id
      );
      if (!imagenProductoEliminada)
        throw new Error("Imagen de producto no encontrada para eliminar");
      return imagenProductoEliminada;
    } catch (error) {
      throw new Error(
        `Error al eliminar la imagen del producto con ID ${id}: ${error.message}`
      );
    }
  }
}

const servicioImagenProducto = new ServicioImagenProducto();

export default servicioImagenProducto;
