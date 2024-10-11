import RepositorioBase from "./Base.js";
import ModeloProveedor from "../modelos/Proveedor.js";

class RepositorioProveedor extends RepositorioBase {
  constructor() {
    super(ModeloProveedor);
  }
}

const repositorioproveedor = new RepositorioProveedor();

export default repositorioproveedor;
