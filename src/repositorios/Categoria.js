import RepositorioBase from "./Base.js";
import ModeloCategoria from "../modelos/Categoria.js";

class RepositorioCategoria extends RepositorioBase {
  constructor() {
    super(ModeloCategoria);
  }
}

const repositorioCategoria = new RepositorioCategoria();

export default repositorioCategoria;
