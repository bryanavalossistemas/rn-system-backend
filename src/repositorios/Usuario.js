import RepositorioBase from "./Base.js";
import { Usuario, Vendedor } from "../modelos/index.js";

class RepositorioUsuario extends RepositorioBase {
  constructor() {
    super(Usuario);
  }

  obtenerPorUsuario = async (usuario) => {
    try {
      return await this.model.findOne({
        where: { usuario },
        include: [{ model: Vendedor, as: "vendedor" }],
      });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el usuario con usuario: ${usuario}: ${error.message}`
      );
    }
  };
}

const repositorioUsuario = new RepositorioUsuario();

export default repositorioUsuario;
