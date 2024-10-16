import repositorioMarca from "../repositorios/Marca.js";

class ServicioMarca {
  async crearMarca(nombre) {
    try {
      const nombrenormalizado = nombre.trim().toLowerCase();
      const marcaexiste = await repositorioMarca.obtenerPorNombre(nombrenormalizado);
      if (marcaexiste){
          throw new Error(`la marca ya existe con el nombre de: ${nombrenormalizado} `)
      };
      const nuevaMarca = { nombre :nombrenormalizado };
      const marcacreada =await repositorioMarca.agregar(nuevaMarca);
      return {
        ok:true,
        message:marcacreada,
      };
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

  async obtenerMarcaPorId(id) {
    try {
      const marca = await repositorioMarca.obtenerPorId(id);
      if (!marca) throw new Error("Marca no encontrada");
      return marca;
    } catch (error) { 
      throw new Error(
        `Error al obtener la marca con ID ${id}: ${error.message}`
      );
    }
  }

  async actualizarMarca(id, nombre) {
    try {
      const nombrenormalizado = nombre.trim().toLowerCase();
      const marcaexiste = await repositorioMarca.obtenerPorNombre(nombrenormalizado);
      if (marcaexiste){
          throw new Error(`la marca ya existe con el nombre de: ${nombrenormalizado} `)
      };  
      const datosActualizados = { nombre: nombrenormalizado };
      const marcaActualizada = await repositorioMarca.actualizar(
        id,
        datosActualizados
      );
      if (!marcaActualizada)
        throw new Error("Marca no encontrada para actualizar");
      
      return {
      ok: true,
      message: marcaActualizada,
      }
    } catch (error) {
      throw new Error(
        `Error al actualizar la marca con ID ${id}: ${error.message}`
      );
    }
  }

  async eliminarMarca(id) {
    try {
      const marcaEliminada = await repositorioMarca.eliminar(id);
      if (!marcaEliminada) throw new Error("Marca no encontrada para eliminar");
      return marcaEliminada;
    } catch (error) {
      throw new Error(
        `Error al eliminar la marca con ID ${id}: ${error.message}`
      );
    }
  }
}

const servicioMarca = new ServicioMarca();

export default servicioMarca;
