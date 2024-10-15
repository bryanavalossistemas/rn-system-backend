import RepositorioBase from "./Base.js";
import { Marca } from "../modelos/index.js";

class RepositorioMarca extends RepositorioBase {
  constructor() {
    super(Marca);
  }
}

const repositorioMarca = new RepositorioMarca();

export default repositorioMarca;
