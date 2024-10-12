import sequelize from "../configuraciones/BaseDeDatos.js";
import DataTypes from "sequelize";
import ModeloProveedor from "./Proveedor.js";

const ModeloCompra = sequelize.define(
  "Compra",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    proveedorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

ModeloCompra.belongsTo(ModeloProveedor, {
  foreignKey: "proveedorId",
  as: "proveedor",
});

export default ModeloCompra;
