import RepositorioBase from "./Base.js";
import { DetalleVenta } from "../modelos/index.js";

class RepositorioDetalleVenta extends RepositorioBase {
  constructor() {
    super(DetalleVenta);
  }
}

const repositorioDetalleVenta = new RepositorioDetalleVenta();

export default repositorioDetalleVenta;
