import sequelize from "../configuraciones/BaseDeDatos.js";
import DataTypes from "sequelize";
import ModeloCliente from "./Cliente.js";

const ModeloVenta = sequelize.define(
  "Venta",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    igv: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default ModeloVenta;
