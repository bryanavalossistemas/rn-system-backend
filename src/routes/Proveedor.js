import express from "express";
import ControladorProveedor from "../controllers/Proveedor.js"

const router = express.Router();

router.post("/", ControladorProveedor.crearProveedor);
router.get("/", ControladorProveedor.obtenerTodosLosProveedores);
router.get("/:id", ControladorProveedor.obtenerProveedorPorId);
router.put("/:id", ControladorProveedor.modificarProveedorPorId);
router.delete("/:id", ControladorProveedor.eliminarProveedorPorId);

export default router;
