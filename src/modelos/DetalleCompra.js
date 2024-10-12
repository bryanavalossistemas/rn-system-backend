import sequelize from "../configuraciones/BaseDeDatos.js";
import DataTypes from "sequelize";
import Compra from "./Compra.js";
import Producto from "./Producto.js"

const DetalleCompra = sequelize.define(
  "DetalleCompra",
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
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    compraId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);


DetalleCompra.belongsTo(Producto, {foreignKey: "productoId", targetId: "id"});
DetalleCompra.belongsTo(Compra, {foreignKey: "compraId", targetId: "id"});

export default DetalleCompra;
