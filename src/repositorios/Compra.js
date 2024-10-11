import RepositorioBase from "./Base.js";
import ModeloCompras from "../modelos/Compra.js";

class RepositorioCompras extends RepositorioBase {
  constructor() {
    super(ModeloCompras);
  }
}

const repositoriocompras = new RepositorioCompras();

export default repositoriocompras;