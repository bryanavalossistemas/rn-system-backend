import sequelize from "../configuraciones/BaseDeDatos.js";
import DataTypes from "sequelize";
import Venta from "./Venta.js";
import Producto from "./Producto.js"

const DetalleVenta = sequelize.define(
  "DetalleVenta",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    ventaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

DetalleVenta.belongsTo(Venta, {foreignKey: "ventaId", targetId: "id"});
DetalleVenta.belongsTo(Producto, {foreignKey: "productoId", targetId: "id"});

export default DetalleVenta;
