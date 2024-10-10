import RepositorioBase from "./Base.js";
import ModeloVendedor from "../modelos/Vendedor.js";

class RepositorioVendedor extends RepositorioBase {
  constructor() {
    super(ModeloVendedor);
  }
}

const repositorioVendedor = new RepositorioVendedor();

export default repositorioVendedor;
