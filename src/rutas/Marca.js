import express from "express";
import ControladorMarca from "../controladores/Marca.js";

const router = express.Router();

router.post("/", ControladorMarca.crearMarca);
router.get("/", ControladorMarca.obtenerMarcas);
// router.get("/:id", ControladorMarca.obtenerMarcaPorId);
// router.put("/:id", ControladorMarca.modificarMarcaPorId);
// router.delete("/:id", ControladorMarca.eliminarMarcaPorId);

export default router;
