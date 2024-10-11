import repositorioimagenproductos from "../repositorios/ImagenProducto.js";

class ServicioImagenProducto {
  async crearImagenProducto(url, publicidad) {
    try {
      const nuevaImagenProducto = { url, publicidad };
      return await repositorioimagenproductos.agregar(nuevaImagenProducto);
    } catch (error) {
      throw new Error(
        `Error al crear la imagen del producto: ${error.message}`
      );
    }
  }

  async obtenerImagenesProducto() {
    try {
      return await repositorioimagenproductos.obtenerTodos();
    } catch (error) {
      throw new Error(
        `Error al obtener las imágenes de productos: ${error.message}`
      );
    }
  }

  async obtenerImagenProductoPorId(id) {
    try {
      const imagenProducto = await repositorioimagenproductos.obtenerPorId(id);
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
      return await repositorioimagenproductos.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(
        `Error al actualizar la imagen del producto con ID ${id}: ${error.message}`
      );
    }
  }

  async eliminarImagenProducto(id) {
    try {
      const imagenProductoEliminada = await repositorioimagenproductos.eliminar(
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
