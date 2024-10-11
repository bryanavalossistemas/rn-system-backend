import RepositorioBase from './Base.js';
import Cliente from '../modelos/Cliente.js';

class ClienteRepositorio extends RepositorioBase {
  constructor() {
    super(Cliente);
  }
}

const repositorioCliente = new ClienteRepositorio();

export default repositorioCliente;
