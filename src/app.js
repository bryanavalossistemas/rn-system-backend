import cors from "cors";
import express from "express";
import morgan from "morgan";

import rutasCategoria from "./routes/Categoria.js";
import rutasMarca from "./routes/Marca.js";
import rutasProveedor from "./routes/Proveedor.js";
import rutasUsuario from "./routes/Usuario.js";
import rutasRol from "./routes/Rol.js";
import rutasAdministrador from "./routes/Administrador.js";
import rutasVendedor from "./routes/Vendedor.js";
import rutasCompra from "./routes/Compra.js";
// import rutasCliente from "./routes/Cliente.js";
/*import rutasVenta from './routes/Venta.js'; */

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
app.use("/api/roles", rutasRol);
app.use("/api/usuarios", rutasUsuario);
app.use("/api/administrador", rutasAdministrador);
app.use("api/vendedores", rutasVendedor);
app.use("api/compras", rutasCompra);
// app.use("/api/clientes", rutasCliente);
/*app.use("/api/ventas", rutasVenta);*/

export default app;
