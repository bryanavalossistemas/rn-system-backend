import RepositorioBase from "./Base.js";
import ModeloMarcas from "../modelos/Marca.js";

class RepositorioMarca extends RepositorioBase {
    constructor() {
        super (ModeloMarcas);
    }
}

const repositoriomarcas = new RepositorioMarca();

export default repositoriomarcas;