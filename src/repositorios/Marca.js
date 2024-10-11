import RepositorioBase from "./Base.js";
import ModeloMarcas from "../modelos/Marca.js";

class RepositorioMarca extends RepositorioBase {
  constructor() {
    super(ModeloMarcas);
  }
}

const repositorioMarca = new RepositorioMarca();

export default repositorioMarca;
