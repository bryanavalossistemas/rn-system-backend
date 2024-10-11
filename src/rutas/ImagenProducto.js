import express from "express";
import ControladorImagenProducto from "../controladores/ImagenProducto.js";

const router = express.Router();

router.post("/", ControladorImagenProducto.crearImagenProducto);
router.get("/", ControladorImagenProducto.obtenerImagenesProducto);
router.get("/:id", ControladorImagenProducto.obtenerImagenProductoPorId);
router.put("/:id", ControladorImagenProducto.actualizarImagenProducto);
router.delete("/:id", ControladorImagenProducto.eliminarImagenProducto);

export default router;