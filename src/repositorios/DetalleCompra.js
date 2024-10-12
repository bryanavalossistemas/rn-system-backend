import RepositorioBase from "./Base.js";
import ModeloDetalleCompra from "../modelos/DetalleCompra.js";

class RepositorioDetalleCompra extends RepositorioBase {
  constructor() {
    super(ModeloDetalleCompra);
  }
}

const repositorioDetalleCompra = new RepositorioDetalleCompra();

export default repositorioDetalleCompra;