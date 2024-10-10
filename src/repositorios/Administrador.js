import RepositorioBase from "./Base.js";
import ModeloAdministrador from "../modelos/Administrador.js";

class RepositorioAdministrador extends RepositorioBase {
  constructor() {
    super(ModeloAdministrador);
  }
}

const repositorioAdministrador = new RepositorioAdministrador();

export default repositorioAdministrador;
