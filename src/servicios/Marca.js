import repositorioMarca from "../repositorios/Marca.js";

class ServicioMarca {
  async crearMarca(nombre) {
    try {
      const marcaExiste = await repositorioMarca.obtenerPorNombre(nombre);
      if (marcaExiste) {
        throw new Error(`Ya existe una marca con el nombre: ${nombre}`);
      }
      const nuevaMarca = { nombre };
      const marcaCreada = await repositorioMarca.agregar(nuevaMarca);
      return {
        ok: true,
        message: marcaCreada,
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
      const marcaExiste = await repositorioMarca.obtenerPorNombre(nombre);
      if (marcaExiste && marcaExiste.id != id) {
        throw new Error(`Ya existe una marca con nombre: ${nombre}`);
      }
      const datosActualizados = { nombre };
      const marcaActualizada = await repositorioMarca.actualizar(
        id,
        datosActualizados
      );
      return {
        ok: true,
        message: marcaActualizada,
      };
    } catch (error) {
      throw new Error(`Error al crear la marca: ${error.message}`);
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
