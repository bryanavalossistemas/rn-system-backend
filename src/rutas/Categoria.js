import express from "express";
import ControladorCategoria from "../controladores/Categoria.js";

const router = express.Router();

router.post("/", ControladorCategoria.crearCategoria);
router.get("/", ControladorCategoria.obtenerCategorias);
router.get("/:id", ControladorCategoria.obtenerCategoriaPorId);
router.put("/:id", ControladorCategoria.actualizarCategoria);
router.delete("/:id", ControladorCategoria.eliminarCategoria);

export default router;
