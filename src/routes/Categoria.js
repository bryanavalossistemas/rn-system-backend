import express from "express";
import ControladorCategoria from "../controllers/Categoria.js";

const router = express.Router();

router.post("/", ControladorCategoria.crearCategoria);
router.get("/", ControladorCategoria.obtenerTodasLasCategorias);
router.get("/:id", ControladorCategoria.obtenerCategoriaPorId);
router.put("/:id", ControladorCategoria.modificarCategoriaPorId);
router.delete("/:id", ControladorCategoria.eliminarCategoriaPorId);

export default router;
