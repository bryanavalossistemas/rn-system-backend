import RepositorioBase from "./Base.js";
import { Proveedor } from "../modelos/index.js";

class RepositorioProveedor extends RepositorioBase {
  constructor() {
    super(Proveedor);
  }

  obtenerPorRUC = async (ruc) => {
    try {
      return await this.model.findOne({ where: { ruc } });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el proveedor con RUC: ${ruc}: ${error.message}`
      );
    }
  };
}

const repositorioProveedor = new RepositorioProveedor();

export default repositorioProveedor;
