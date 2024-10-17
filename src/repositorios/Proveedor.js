import RepositorioBase from "./Base.js";
import { Proveedor } from "../modelos/index.js";

class RepositorioProveedor extends RepositorioBase {
  constructor() {
    super(Proveedor);
  }

  obtenerPorNombre = async (nombre) => {
    try {
      return await this.model.findOne({ where: { nombre } });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el proveedor con nombre: ${nombre}: ${error.message}`
      );
    }
  };

  obtenerPorRUC = async (ruc) => {
    try {
      return await this.model.findOne({ where: { ruc } });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el proveedor con RUC: ${ruc}: ${error.message}`
      );
    }
  };

  obtenerPorTelefono = async (telefono) => {
    try {
      return await this.model.findOne({ where: { telefono } });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el proveedor con teléfono: ${telefono}: ${error.message}`
      );
    }
  };

  obtenerPorCelular = async (celular) => {
    try {
      return await this.model.findOne({ where: { celular } });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el proveedor con celular: ${celular}: ${error.message}`
      );
    }
  };
}

const repositorioProveedor = new RepositorioProveedor();

export default repositorioProveedor;
