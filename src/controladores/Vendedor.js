import servicioVendedor from "../servicios/Vendedor.js";

class ControladorVendedor {
  static async obtenerVendedores(req, res) {
    try {
      console.log("first");
      const vendedores = await servicioVendedor.obtenerVendedores();
      res.json(vendedores);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default ControladorVendedor;
