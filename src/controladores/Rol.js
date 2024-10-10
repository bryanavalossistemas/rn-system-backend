import servicioRol from "../servicios/Rol.js";

class ControladorRol {
  static async crearRol(req, res) {
    try {
      const { nombre } = req.body;
      const nuevoRol = await servicioRol.crearRol(nombre);
      res.status(201).json(nuevoRol);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async obtenerRoles(req, res) {
    try {
      const roles = await servicioRol.obtenerRoles();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async obtenerRolPorId(req, res) {
    try {
      const rol = await servicioRol.obtenerRolPorId(req.params.id);
      res.json(rol);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async actualizarRol(req, res) {
    try {
      const { nombre } = req.body;
      const rolActualizado = await servicioRol.actualizarRol(
        req.params.id,
        nombre
      );
      res.json(rolActualizado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async eliminarRol(req, res) {
    try {
      const rolEliminado = await servicioRol.eliminarRol(req.params.id);
      res.json(rolEliminado);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default ControladorRol;
