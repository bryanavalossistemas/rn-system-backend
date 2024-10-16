import RepositorioBase from "./Base.js";
import { Categoria } from "../modelos/index.js";

class RepositorioCategoria extends RepositorioBase {
  constructor() {
    ``;
    super(Categoria);
  }

  obtenerPorNombre = async (nombre) => {
    try {
      return await this.model.findOne({ where: { nombre } });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener la categoría con nombre: ${nombre}: ${error.message}`
      );
    }
  };
}

const repositorioCategoria = new RepositorioCategoria();

export default repositorioCategoria;
