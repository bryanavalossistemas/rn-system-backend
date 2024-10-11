import sequelize from "../configuraciones/BaseDeDatos.js";
import DataTypes from "sequelize";
import Proveedor from "./Proveedor.js"

const Compra = sequelize.define(
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

Compra.belongsTo(Proveedor, {
  foreignKey: "proveedorId",  
  targetId: "id",
});

export default Compra;