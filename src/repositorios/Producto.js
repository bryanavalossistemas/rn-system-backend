import RepositorioBase from "./Base.js";
import ModeloProductos from "../modelos/Producto.js";

class RepositorioProductos extends RepositorioBase {
  constructor() {
    super(ModeloProductos);
  }
}

const repositorioproductos = new RepositorioProductos();

export default repositorioproductos;
