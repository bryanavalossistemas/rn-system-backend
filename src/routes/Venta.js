import express from "express";
import ControllerVenta from "../controllers/Venta.js";

const router = express.Router();

router.post("/", ControllerVenta.crearVenta);
router.get("/", ControllerVenta.obtenerVentas);
router.get("/:id", ControllerVenta.obtenerVentaPorId);
router.put("/:id", ControllerVenta.modificarVentaPorId);
router.delete("/:id", ControllerVenta.eliminarVentaPorId);

export default router;
