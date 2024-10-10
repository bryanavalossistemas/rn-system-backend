import express from "express";
import ControladorRol from "../controllers/Rol.js";
const router = express.Router();

router.post("/", ControladorRol.crearRol);
router.get("/", ControladorRol.obtenerTodosLosRoles);
router.get("/:id", ControladorRol.obtenerRolPorId);
router.put("/:id", ControladorRol.modificarRolPorId);
router.delete("/:id", ControladorRol.eliminarRolPorId);

export default router;
