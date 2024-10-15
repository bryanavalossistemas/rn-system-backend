import RepositorioBase from "./Base.js";
import { Categoria } from "../modelos/index.js";

class RepositorioCategoria extends RepositorioBase {
  constructor() {
    ``;
    super(Categoria);
  }
}

const repositorioCategoria = new RepositorioCategoria();

export default repositorioCategoria;
