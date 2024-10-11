import express from "express";
import ControladorVendedor from "../controladores/Vendedor.js";

const router = express.Router();

router.get("/", ControladorVendedor.obtenerVendedores);

export default router;
