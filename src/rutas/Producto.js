import express from "express";
import ControladorProducto from "../controladores/Producto.js";
import { upload } from "../middlewares/Multer.js";

const router = express.Router();

router.post("/", upload.single("image"), ControladorProducto.crearProducto);
router.get("/", ControladorProducto.obtenerProductos);
router.get("/:id", ControladorProducto.obtenerProductoPorId);
router.put(
  "/:id",
  upload.single("image"),
  ControladorProducto.actualizarProducto
);
router.delete("/:id", ControladorProducto.eliminarProducto);

export default router;
