import servicioProveedor from "../servicios/Proveedor.js";

class ControladorProveedor {
  static async crearProveedor(req, res) {
    try {
      const { nombre, ruc, telefono, celular, direccion } = req.body;
      const nuevoProveedor = await servicioProveedor.crearProveedor(
        nombre,
        ruc,
        telefono,
        celular,
        direccion
      );
      res.status(201).json(nuevoProveedor);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async obtenerProveedores(req, res) {
    try {
      const Proveedor = await servicioProveedor.obtenerProveedores();
      res.json(Proveedor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async obtenerProveedorPorId(req, res) {
    try {
      const proveedor = await servicioProveedor.obtenerProveedorPorId(
        req.params.id
      );
      res.json(proveedor);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async actualizarProveedor(req, res) {
    try {
      const { nombre, ruc, telefono, celular, direccion } = req.body;
      const ProveedorActualizado = await servicioProveedor.actualizarProveedor(
        req.params.id,
        nombre,
        ruc,
        telefono,
        celular,
        direccion
      );
      res.json(ProveedorActualizado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async eliminarProveedor(req, res) {
    try {
      const proveedorEliminado = await servicioProveedor.eliminarProveedor(
        req.params.id
      );
      res.json(proveedorEliminado);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default ControladorProveedor;
