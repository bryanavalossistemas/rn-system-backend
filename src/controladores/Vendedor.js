import servicioVendedor from "../servicios/Vendedor.js";

class ControladorVendedor {
  static async crearVendedor(req, res) {
    try {
      const { nombre, usuario, contrasenia, dni, telefono } = req.body;
      const nuevoVendedor = await servicioVendedor.crearVendedor(
        nombre,
        usuario,
        contrasenia,
        dni,
        telefono
      );
      res.status(201).json(nuevoVendedor);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async obtenerVendedores(req, res) {
    try {
      const vendedores = await servicioVendedor.obtenerVendedores();
      res.json(vendedores);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async obtenerVendedorPorUsuarioId(req, res) {
    try {
      const vendedor = await servicioVendedor.obtenerVendedorPorUsuarioId(
        req.params.id
      );
      res.json(vendedor);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async obtenerVendedorPorDNI(req, res) {
    try {
      const vendedor = await servicioVendedor.obtenerVendedorPorDNI(
        req.params.dni
      );
      res.json(vendedor);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default ControladorVendedor;
