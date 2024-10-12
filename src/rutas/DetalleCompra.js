import express from "express";
import ControladorDetalleCompra from "../controladores/DetalleCompra.js";

const router = express.Router();

router.post("/", ControladorDetalleCompra.crearDetalleCompra);
router.get("/", ControladorDetalleCompra.obtenerDetalleCompras);
router.get("/:id", ControladorDetalleCompra.obtenerDetalleCompraPorId);
router.put("/:id", ControladorDetalleCompra.actualizarDetalleCompra);


export default router;