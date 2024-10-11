import express from "express";
import ControladorProducto from "../controladores/Producto.js";

const router = express.Router();

router.post("/", ControladorProducto.crearProducto);
router.get("/", ControladorProducto.obtenerProductos);
router.get("/:id", ControladorProducto.obtenerProductoPorId);
router.put("/:id", ControladorProducto.actualizarProducto);
router.delete("/:id", ControladorProducto.eliminarProducto);

export default router;