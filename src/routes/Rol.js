import express from "express";
import ControllerRol from "../controllers/Rol.js";
const router = express.Router();

router.post("/",ControllerRol.crearRol);
router.get("/", ControllerRol.obtenerRoles);
router.get("/:id",ControllerRol.obtenerRolId);
router.put("/:id",ControllerRol.modificarRolId );
router.delete("/:id",ControllerRol.eliminarRolporId );

export default router;
