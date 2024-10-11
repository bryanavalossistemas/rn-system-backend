import repositorioMarca from "../repositorios/Marca.js";

class ServicioMarca {
  async crearMarca(nombre) {
    try {
      const nuevaMarca = { nombre };
      return await repositorioMarca.agregar(nuevaMarca);
    } catch (error) {
      throw new Error(`Error al crear la marca: ${error.message}`);
    }
  }

  async obtenerMarcas() {
    try {
      return await repositorioMarca.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener las marcas: ${error.message}`);
    }
  }

  //   async obtenerCategoriaPorId(id) {
  //     try {
  //       const categoria = await repositorioMarca.obtenerPorId(id);
  //       if (!categoria) throw new Error("Categoría no encontrada");
  //       return categoria;
  //     } catch (error) {
  //       throw new Error(
  //         `Error al obtener la marca con ID ${id}: ${error.message}`
  //       );
  //     }
  //   }

  //   async actualizarCategoria(id, nombre) {
  //     try {
  //       const datosActualizados = { nombre };
  //       return await repositorioMarca.actualizar(id, datosActualizados);
  //     } catch (error) {
  //       throw new Error(
  //         `Error al actualizar la marca con ID ${id}: ${error.message}`
  //       );
  //     }
  //   }

  //   async eliminarCategoria(id) {
  //     try {
  //       const categoriaEliminada = await repositorioMarca.eliminar(id);
  //       if (!categoriaEliminada)
  //         throw new Error("Categoría no encontrada para eliminar");
  //       return categoriaEliminada;
  //     } catch (error) {
  //       throw new Error(
  //         `Error al eliminar la marca con ID ${id}: ${error.message}`
  //       );
  //     }
  //   }
}

const servicioCategoria = new ServicioMarca();

export default servicioCategoria;
