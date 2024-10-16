import RepositorioBase from "./Base.js";
import { Marca } from "../modelos/index.js";

class RepositorioMarca extends RepositorioBase {
  constructor() {
    super(Marca);
  }

  obtenerPorNombre = async (nombre) => {
    try {
      return await this.model.findOne({ where: { nombre } });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener la marca con nombre: ${nombre}: ${error.message}`
      );
    }
  };
}

const repositorioMarca = new RepositorioMarca();

export default repositorioMarca;
