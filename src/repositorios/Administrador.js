import RepositorioBase from "./Base.js";
import { Administrador, Usuario } from "../modelos/index.js";

class RepositorioAdministrador extends RepositorioBase {
  constructor() {
    super(Administrador);
  }

  obtenerPorId = async (id) => {
    try {
      return await this.model.findByPk(id, {
        include: [
          {
            model: Usuario,
            as: "usuario",
          },
        ],
      });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el elemento con ID: ${id}: ${error.message}`
      );
    }
  };
}

const repositorioAdministrador = new RepositorioAdministrador();

export default repositorioAdministrador;
