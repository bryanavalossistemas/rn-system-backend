import RepositorioBase from "./Base.js";
import ModeloImagenProducto from "../modelos/ImagenProducto.js";

class RepositorioImagenProducto extends RepositorioBase {
  constructor() {
    super(ModeloImagenProducto);
  }
}

const repositorioImagenProducto = new RepositorioImagenProducto();

export default repositorioImagenProducto;
