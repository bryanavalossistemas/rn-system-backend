import repositorioCategoria from "../repositorios/Categoria.js";

class ServicioCategoria {
  async crearCategoria(nombre) {
    try {
      const nuevaCategoria = { nombre };
      return await repositorioCategoria.agregar(nuevaCategoria);
    } catch (error) {
      throw new Error(`Error al crear la categoría: ${error.message}`);
    }
  }

  async obtenerCategorias() {
    try {
      return await repositorioCategoria.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener las categorias: ${error.message}`);
    }
  }

  async obtenerCategoriaPorId(id) {
    try {
      const categoria = await repositorioCategoria.obtenerPorId(id);
      if (!categoria) throw new Error("Categoría no encontrada");
      return categoria;
    } catch (error) {
      throw new Error(
        `Error al obtener la categoría con ID ${id}: ${error.message}`
      );
    }
  }

  async actualizarCategoria(id, nombre) {
    try {
      const datosActualizados = { nombre };
      return await repositorioCategoria.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(
        `Error al actualizar la categoría con ID ${id}: ${error.message}`
      );
    }
  }

  async eliminarCategoria(id) {
    try {
      const categoriaEliminada = await repositorioCategoria.eliminar(id);
      if (!categoriaEliminada)
        throw new Error("Categoría no encontrada para eliminar");
      return categoriaEliminada;
    } catch (error) {
      throw new Error(
        `Error al eliminar la categoría con ID ${id}: ${error.message}`
      );
    }
  }
}

const servicioCategoria = new ServicioCategoria();

export default servicioCategoria;
