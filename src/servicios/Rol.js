import repositorioRol from "../repositorios/Rol.js";

class ServicioCategoria {
  async crearRol(nombre) {
    try {
      const nuevoRol = { nombre };
      return await repositorioRol.agregar(nuevoRol);
    } catch (error) {
      throw new Error(`Error al crear el rol: ${error.message}`);
    }
  }

  async obtenerRoles() {
    try {
      return await repositorioRol.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener los roles: ${error.message}`);
    }
  }

  async obtenerRolPorId(id) {
    try {
      const rol = await repositorioRol.obtenerPorId(id);
      if (!rol) throw new Error("Rol no encontrado");
      return rol;
    } catch (error) {
      throw new Error(
        `Error al obtener el rol con ID ${id}: ${error.message}`
      );
    }
  }

  async actualizarRol(id, nombre) {
    try {
      const datosActualizados = { nombre };
      return await repositorioRol.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(
        `Error al actualizar el rol con ID ${id}: ${error.message}`
      );
    }
  }

  async eliminarRol(id) {
    try {
      const rolEliminado = await repositorioRol.eliminar(id);
      if (!rolEliminado)
        throw new Error("Rol no encontrado para eliminar");
      return rolEliminado;
    } catch (error) {
      throw new Error(
        `Error al eliminar el rol con ID ${id}: ${error.message}`
      );
    }
  }
}

const servicioRol = new ServicioCategoria();

export default servicioRol;
