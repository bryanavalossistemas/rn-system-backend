import repositorioCategoria from "../repositorios/Categoria.js";

class ServicioCategoria {
  async crearCategoria(nombre) {
    try {
      const nombrenormalizado = nombre.trim().toLowerCase();
      const categoriaexiste = await repositorioCategoria.obtenerPorNombre(nombrenormalizado);
      if (categoriaexiste){
          throw new Error(`la categoria ya existe con el nombre de: ${nombrenormalizado} `)
      };
      const nuevaCategoria = { nombre :nombrenormalizado };
      const categoriacreada =await repositorioCategoria.agregar(nuevaCategoria);
      return {
        ok:true,
        message:categoriacreada,
      };
    } catch (error) {
      throw new Error(`Error al crear la categoria: ${error.message}`);
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
      const nombrenormalizado = nombre.trim().toLowerCase();
      const categoriaexiste = await repositorioCategoria.obtenerPorNombre(nombrenormalizado);
      if (categoriaexiste){
          throw new Error(`la categoria ya existe con el nombre de: ${nombrenormalizado} `)
      };  
      const datosActualizados = { nombre: nombrenormalizado };
      const categoriaActualizada = await repositorioCategoria.actualizar(
        id,
        datosActualizados
      );
      if (!categoriaActualizada)
        throw new Error("categoria no encontrada para actualizar");
      
      return {
      ok: true,
      message: categoriaActualizada,
      }
    } catch (error) {
      throw new Error(
        `Error al actualizar la categoria con ID ${id}: ${error.message}`
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
