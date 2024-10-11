import servicioAdministrador from "../servicios/Administrador.js";

class ControladorAdministrador {
  static async crearAdministrador(req, res) {
    try {
      const { nombre, usuario, contrasenia } = req.body;
      const nuevoAdministrador = await servicioAdministrador.crearAdministrador(
        nombre,
        usuario,
        contrasenia
      );
      res.status(201).json(nuevoAdministrador);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async actualizarAdministrador(req, res) {
    try {
      const { nombre, usuario, contrasenia } = req.body;
      const administradorActualizado =
        await servicioAdministrador.actualizarAdministrador(
          req.params.id,
          nombre,
          usuario,
          contrasenia
        );
      res.json(administradorActualizado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async crearVendedor(req, res) {
    try {
      const { nombre, usuario, contrasenia, dni, telefono } = req.body;
      const nuevoVendedor = await servicioAdministrador.crearVendedor(
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

  static async actualizarVendedor(req, res) {
    try {
      const { nombre, usuario, contrasenia, dni, telefono } = req.body;
      const vendedorActualizado =
        await servicioAdministrador.actualizarVendedor(
          req.params.id,
          nombre,
          usuario,
          contrasenia,
          dni,
          telefono
        );
      res.json(vendedorActualizado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async eliminarVendedor(req, res) {
    try {
      const vendedorEliminado = await servicioAdministrador.eliminarVendedor(
        req.params.id
      );
      res.json(vendedorEliminado);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default ControladorAdministrador;
