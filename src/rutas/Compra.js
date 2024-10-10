import express from "express";
import ControladorCompra from "../controladores/Compra.js";

const router = express.Router();

router.post("/", ControladorCompra.crearCompra);
router.get("/", ControladorCompra.obtenerTodasLasCompras);
router.get("/:id", ControladorCompra.obtenerCompraPorId);
router.put("/:id", ControladorCompra.modificarCompraPorId);
router.delete("/:id", ControladorCompra.eliminarCompraPorId);

export default router;