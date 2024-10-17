import repositorioCategoria from "../repositorios/Categoria.js";

class ServicioCategoria {
  async crearCategoria(nombre) {
    try {
      const categoriaExiste = await repositorioCategoria.obtenerPorNombre(
        nombre
      );
      if (categoriaExiste) {
        throw new Error(`Ya existe una categoría con el nombre: ${nombre}`);
      }
      const nuevaCategoria = { nombre };
      const categoriaCreada = await repositorioCategoria.agregar(
        nuevaCategoria
      );
      return {
        ok: true,
        message: categoriaCreada,
      };
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
      const categoriaExiste = await repositorioCategoria.obtenerPorNombre(
        nombre
      );
      if (categoriaExiste && categoriaExiste.id != id) {
        throw new Error(`Ya existe una categoría con nombre: ${nombre}`);
      }
      const datosActualizados = { nombre };
      const categoriaActualizada = await repositorioCategoria.actualizar(
        id,
        datosActualizados
      );
      return {
        ok: true,
        message: categoriaActualizada,
      };
    } catch (error) {
      throw new Error(`Error al actualizar la categoría: ${error.message}`);
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
