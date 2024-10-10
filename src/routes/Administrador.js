import express from "express";
import ControladorAdministrador from "../controllers/Administrador.js";
const router = express.Router();

router.post("/crearVendedor", ControladorAdministrador.crearVendedor);
router.put(
  "/modificarVendedor/:id",
  ControladorAdministrador.modificarVendedorPorId
);
router.put(
  "/:id",
  ControladorAdministrador.modificarDatosDelAdministradorPorId
);
router.get("/vendedores", ControladorAdministrador.obtenerTodosLosVendedores);

export default router;
