import jwt from "jsonwebtoken";
import ModeloUsuario from "../modelos/Usuario.js";
import dotenv from "dotenv";
dotenv.config();

export const authenticate = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    if (!bearer) {
      throw new Error("Falta el bearer");
    }

    const [, token] = bearer.split(" ");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (typeof decoded === "object" && decoded.usuarioId) {
      const user = await ModeloUsuario.findByPk(decoded.usuarioId);
      if (!user) {
        throw new Error("No existe el usuario");
      }
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const authorize = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== "ADMIN") {
      throw new Error("No tienes autorización");
    }
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
