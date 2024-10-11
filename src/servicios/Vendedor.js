import repositorioVendedor from "../repositorios/Vendedor.js";

class ServicioVendedor {
  async obtenerVendedores() {
    try {
      return await repositorioVendedor.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener los vendedores: ${error.message}`);
    }
  }
}

const servicioVendedor = new ServicioVendedor();

export default servicioVendedor;
