import express from "express";
import ControladorVendedor from "../controladores/Vendedor.js";

const router = express.Router();

router.post("/", ControladorVendedor.crearVendedor);
router.get("/", ControladorVendedor.obtenerVendedores);
router.get("/usuario/:id", ControladorVendedor.obtenerVendedorPorUsuarioId);
router.get("/dni/:dni", ControladorVendedor.obtenerVendedorPorDNI);

export default router;
