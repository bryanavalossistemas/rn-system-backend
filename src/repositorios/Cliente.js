import RepositorioBase from "./Base.js";
import { Cliente } from "../modelos/index.js";

class ClienteRepositorio extends RepositorioBase {
  constructor() {
    super(Cliente);
  }

  obtenerPorRUC = async (ruc) => {
    try {
      return await this.model.findOne({ where: { ruc } });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el cliente con RUC: ${ruc}: ${error.message}`
      );
    }
  };

  obtenerPorCelular = async (celular) => {
    try {
      return await this.model.findOne({ where: { celular } });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el cliente con celular: ${celular}: ${error.message}`
      );
    }
  };
}

const repositorioCliente = new ClienteRepositorio();

export default repositorioCliente;
