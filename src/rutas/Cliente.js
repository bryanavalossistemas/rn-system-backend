import express from "express";
import ControllerCliente from "../controladores/Cliente.js";

const router = express.Router();

router.post("/", ControllerCliente.crearCliente);
router.get("/", ControllerCliente.obtenerClientes);
router.get("/:id", ControllerCliente.obtenerClienteId);
router.put("/:id", ControllerCliente.actualizarCliente);
router.delete("/:id", ControllerCliente.eliminarClienteporId);

export default router;
