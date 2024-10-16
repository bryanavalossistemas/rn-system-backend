import express from "express";
import ControladorUsuario from "../controladores/Usuario.js";
import { authenticate } from "../middlewares/Middleware.js";

const router = express.Router();

router.post("/", ControladorUsuario.crearUsuario);
router.get("/", ControladorUsuario.obtenerUsuarios);
router.get("/:id", ControladorUsuario.obtenerUsuarioPorId);
router.put("/:id", ControladorUsuario.actualizarUsuario);
router.delete("/:id", ControladorUsuario.eliminarUsuario);
router.post("/autenticacion/iniciarSesion", ControladorUsuario.iniciarSesion);
router.get(
  "/usuario/obtener",
  authenticate,
  ControladorUsuario.obtenerUsuario
);

export default router;
