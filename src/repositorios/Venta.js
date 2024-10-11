import RepositorioBase from './Base.js';
import ModeloVentas from '../modelos/Venta.js';

class RepositorioVenta extends RepositorioBase {
  constructor() {
    super(ModeloVentas);
  }

}

const repositorioVenta = new RepositorioVenta();
export default repositorioVenta;
