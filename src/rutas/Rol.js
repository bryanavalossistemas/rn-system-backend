import express from "express";
import ControladorRol from "../controladores/Rol.js";
const router = express.Router();

router.post("/", ControladorRol.crearRol);
router.get("/", ControladorRol.obtenerRoles);
router.get("/:id", ControladorRol.obtenerRolPorId);
router.put("/:id", ControladorRol.actualizarRol);
router.delete("/:id", ControladorRol.eliminarRol);

export default router;
