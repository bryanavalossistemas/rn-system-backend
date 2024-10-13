import Venta from "./Venta.js";
import DetalleVenta from "./DetalleVenta.js";
import Producto from "./Producto.js";
import Cliente from "./Cliente.js";

Venta.hasMany(DetalleVenta, {
  as: "detallesVenta",
  foreignKey: "ventaId",
});
DetalleVenta.belongsTo(Venta, { as: "venta", foreignKey: "ventaId" });

Cliente.hasMany(Venta, {
  as: "ventas",
  foreignKey: "clienteId",
});
Venta.belongsTo(Cliente, { as: "cliente", foreignKey: "clienteId" });

Producto.hasMany(DetalleVenta, {
  as: "detallesVenta",
  foreignKey: "productoId",
});
DetalleVenta.belongsTo(Producto, { as: "producto", foreignKey: "productoId" });

export { Venta, DetalleVenta, Producto, Cliente };
