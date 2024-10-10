import RepositorioBase from "./Base.js";
import ModeloRol from "../modelos/Rol.js";

class RepositorioRol extends RepositorioBase {
  constructor() {
    super(ModeloRol);
  }
}

const repositorioRol = new RepositorioRol();

export default repositorioRol;
