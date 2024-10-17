import servicioCliente from "../servicios/Cliente.js";

class ControladorCliente {
  static async crearCliente(req, res) {
    try {
      const { nombre, celular, ruc } = req.body;
      const nuevoCliente = await servicioCliente.crearCliente(
        nombre,
        celular,
        ruc
      );
      res.status(201).json(nuevoCliente);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async obtenerClientes(req, res) {
    try {
      const clientes = await servicioCliente.obtenerClientes();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async obtenerClienteId(req, res) {
    try {
      const cliente = await servicioCliente.obtenerClientePorId(req.params.id);
      res.json(cliente);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async actualizarCliente(req, res) {
    try {
      const { nombre, celular, ruc } = req.body;
      const clienteActualizado = await servicioCliente.actualizarCliente(
        req.params.id,
        nombre,
        celular,
        ruc
      );
      res.json(clienteActualizado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async eliminarClienteporId(req, res) {
    try {
      const clienteEliminado = await servicioCliente.eliminarClientePorId(
        req.params.id
      );
      res.json(clienteEliminado);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default ControladorCliente;
