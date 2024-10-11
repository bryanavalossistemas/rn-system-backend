import express from "express";
import ControladorProveedor from "../controladores/Proveedor.js"

const router = express.Router();

router.post("/", ControladorProveedor.crearProveedor);
router.get("/", ControladorProveedor.obtenerProveedores);
router.get("/:id", ControladorProveedor.obtenerProveedorPorId);
router.put("/:id", ControladorProveedor.actualizarProveedor);
router.delete("/:id", ControladorProveedor.eliminarProveedor);

export default router;
