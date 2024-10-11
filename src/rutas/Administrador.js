import express from "express";
import ControladorAdministrador from "../controladores/Administrador.js";

const router = express.Router();

router.post("/", ControladorAdministrador.crearAdministrador);
router.put("/actualizar/:id", ControladorAdministrador.actualizarAdministrador);
router.post("/vendedores/crear", ControladorAdministrador.crearVendedor);
router.put(
  "/vendedores/actualizar/:id",
  ControladorAdministrador.actualizarVendedor
);
router.delete(
  "/vendedores/eliminar/:id",
  ControladorAdministrador.eliminarVendedor
);

export default router;
