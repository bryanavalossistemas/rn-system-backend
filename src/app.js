import cors from "cors";
import express from "express";
import morgan from "morgan";

import rutasCategoria from "./rutas/Categoria.js";
import rutasMarca from "./rutas/Marca.js";
import rutasProveedor from "./rutas/Proveedor.js";
import rutasUsuario from "./rutas/Usuario.js";
import rutasRol from "./rutas/Rol.js";
import rutasAdministrador from "./rutas/Administrador.js";
import rutasVendedor from "./rutas/Vendedor.js";
import rutasCompra from "./rutas/Compra.js";
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
app.use("/api/administradores", rutasAdministrador);
app.use("/api/vendedores", rutasVendedor);
app.use("/api/compra", rutasCompra);
// app.use("/api/clientes", rutasCliente);
/*app.use("/api/ventas", rutasVenta);*/

export default app;
