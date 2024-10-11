import RepositorioBase from "./Base.js";
import ModeloDetalleVenta from "../modelos/DetalleVenta.js";

class RepositorioDetalleVenta extends RepositorioBase {
  constructor() {
    super(ModeloDetalleVenta);
  }
}

const repositorioDetalleVenta = new RepositorioDetalleVenta();

export default repositorioDetalleVenta;