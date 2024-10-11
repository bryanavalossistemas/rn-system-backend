import express from "express";
import ControladorVenta from "../controladores/Venta.js";

const router = express.Router();

router.post("/", ControladorVenta.crearVenta);
router.get("/", ControladorVenta.obtenerVentas);
router.get("/:id", ControladorVenta.obtenerVentaPorId);
router.put("/:id", ControladorVenta.modificarVentaPorId);
router.delete("/:id", ControladorVenta.eliminarVentaPorId);

export default router;
