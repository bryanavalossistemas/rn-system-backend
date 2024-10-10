import express from "express";
import ControllerUsuario from "../controllers/Usuario.js";
const router = express.Router();

router.post("/",ControllerUsuario.crearUsuario);
router.post("/",ControllerUsuario.obtenerUsuario);
router.get("/:id",ControllerUsuario.obtenerUsuarioId);
router.put("/:id",ControllerUsuario.modificarUsuarioId);
router.delete("/:id",ControllerUsuario.eliminarUsuarioporId);

export default router;