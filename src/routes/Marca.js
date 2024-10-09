import express from "express";
import ControladorMarca from "../controllers/Marca.js"

const router = express.Router();

router.post("/", ControladorMarca.crearMarca);
router.get("/", ControladorMarca.obtenerTodasLasMarcas);
router.get("/:id", ControladorMarca.obtenerMarcaPorId);
router.put("/:id", ControladorMarca.modificarMarcaPorId);
router.delete("/:id", ControladorMarca.eliminarMarcaPorId);

export default router;
