import express from "express";
import ControllerVendedor from "../controllers/Vendedor.js";
const router = express.Router();

router.post("/",ControllerVendedor.crearVendedor);
router.post("/",ControllerVendedor.obtenerVendedor);
router.get("/:id",ControllerVendedor.obtenerVendedorId);
router.put("/:id",ControllerVendedor.modificarVendedorId);
router.delete("/:id",ControllerVendedor.eliminarVendedorporId);

export default router;