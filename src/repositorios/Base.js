class RepositorioBase {
  constructor(model) {
    this.model = model;
  }

  agregar = async (datos) => {
    try {
      return await this.model.create(datos);
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al agregar elementos: ${error.message}`
      );
    }
  };

  obtenerTodos = async () => {
    try {
      return await this.model.findAll({
        order: [["id", "ASC"]],
      });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener elementos: ${error.message}`
      );
    }
  };

  obtenerPorId = async (id) => {
    try {
      return await this.model.findByPk(id);
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el elemento con ID: ${id}: ${error.message}`
      );
    }
  };

  actualizar = async (id, datos) => {
    try {
      const elemento = await this.model.findByPk(id);
      if (!elemento) {
        throw new Error("Elemento no encontrado");
      }
      await elemento.update(datos);
      return elemento;
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al actualizar el elemento con ID ${id}: ${error.message}`
      );
    }
  };

  eliminar = async (id) => {
    try {
      const elemento = await this.model.findByPk(id);
      if (!elemento) {
        throw new Error("Elemento no encontrado");
      }
      await elemento.destroy();
      return elemento;
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al eliminar elemento con ID: ${id}: ${error.message}`
      );
    }
  };
}

export default RepositorioBase;
