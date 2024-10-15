import RepositorioBase from "./Base.js";
import { Rol } from "../modelos/index.js";

class RepositorioRol extends RepositorioBase {
  constructor() {
    super(Rol);
  }
}

const repositorioRol = new RepositorioRol();

export default repositorioRol;
