import cors from "cors";
import express from "express";
import morgan from "morgan";

import rutasRol from "./rutas/Rol.js";
import rutasDetalleVenta from "./rutas/DetalleVenta.js";
import rutasVenta from "./rutas/Venta.js";
import rutasCategoria from "./rutas/Categoria.js";
import rutasMarca from "./rutas/Marca.js";
import rutasProveedor from "./rutas/Proveedor.js";
import rutasUsuario from "./rutas/Usuario.js";
import rutasAdministrador from "./rutas/Administrador.js";
import rutasVendedor from "./rutas/Vendedor.js";
import rutasCompra from "./rutas/Compra.js";
import rutasCliente from "./rutas/Cliente.js";
import rutasProducto from "./rutas/Producto.js";
import rutasImagenProducto from "./rutas/ImagenProducto.js";
import rutasDetalleCompra from "./rutas/DetalleCompra.js";

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
app.use("/api/compras", rutasCompra);
app.use("/api/clientes", rutasCliente);
app.use("/api/ventas", rutasVenta);
app.use("/api/detalleventas", rutasDetalleVenta);
app.use("/api/productos", rutasProducto);
app.use("/api/imagenproducto", rutasImagenProducto);
app.use("/api/detallecompras", rutasDetalleCompra);

export default app;
