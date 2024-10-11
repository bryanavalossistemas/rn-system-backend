import express from "express";
import ControladorDetalleVenta from "../controladores/DetalleVenta.js";

const router = express.Router();

router.post("/", ControladorDetalleVenta.crearDetalleVenta);
router.get("/", ControladorDetalleVenta.obtenerDetalleVenta);
router.get("/:id", ControladorDetalleVenta.obtenerDetalleVentaPorId);
router.put("/:id", ControladorDetalleVenta.actualizarDetalleVenta);


export default router;