import RepositorioBase from "./Base.js";
import ModeloImagenProductos from "../modelos/ImagenProducto.js";

class RepositorioImagenProductos extends RepositorioBase {
  constructor() {
    super(ModeloImagenProductos);
  }
}

const repositorioimagenproductos = new RepositorioImagenProductos();

export default repositorioimagenproductos;
