import express from "express";
import ControladorCompra from "../controladores/Compra.js";

const router = express.Router();

router.post("/", ControladorCompra.crearCompra);
router.get("/", ControladorCompra.obtenerCompras);
router.get("/:id", ControladorCompra.obtenerComprasPorId);
router.put("/:id", ControladorCompra.actualizarCompra);

export default router;
