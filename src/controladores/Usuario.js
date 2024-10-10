import servicioUsuario from "../servicios/Usuario.js";

class ControladorUsuario {
  static async crearUsuario(req, res) {
    try {
      const { nombre, usuario, contrasenia, rolId } = req.body;
      const nuevoUsuario = await servicioUsuario.crearUsuario(
        nombre,
        usuario,
        contrasenia,
        rolId
      );
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async obtenerUsuarios(req, res) {
    try {
      const usuarios = await servicioUsuario.obtenerUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async obtenerUsuarioPorId(req, res) {
    try {
      const usuario = await servicioUsuario.obtenerUsuarioPorId(req.params.id);
      res.json(usuario);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async actualizarUsuario(req, res) {
    try {
      const { nombre, usuario, contrasenia, rolId } = req.body;
      const usuarioActualizado = await servicioUsuario.actualizarUsuario(
        req.params.id,
        nombre,
        usuario,
        contrasenia,
        rolId
      );
      res.json(usuarioActualizado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async eliminarUsuario(req, res) {
    try {
      const usuarioEliminado = await servicioUsuario.eliminarUsuario(
        req.params.id
      );
      res.json(usuarioEliminado);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async iniciarSesion(req, res) {
    try {
      const { usuario, contrasenia } = req.body;
      const token = await servicioUsuario.iniciarSesion(usuario, contrasenia);
      res.json(token);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default ControladorUsuario;
