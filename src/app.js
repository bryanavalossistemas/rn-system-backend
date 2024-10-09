import express from "express";
import cors from "cors";
import morgan from "morgan";

import rutasCategoria from './routes/Categoria.js';
import rutasMarca from './routes/Marca.js';
import rutasProveedor from './routes/Proveedor.js'

// Configurar el servidor Express
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Prueba de inicio
app.get("/", (req, res) => {
  return res.json({ message: "Prueba de inicio" });
});

// Definir las rutas API
app.use("/api/categorias", rutasCategoria);
app.use("/api/marcas", rutasMarca);
app.use("/api/proveedores", rutasProveedor);

export default app;
