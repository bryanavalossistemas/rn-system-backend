import sequelize from "../configuraciones/BaseDeDatos.js";
import DataTypes from "sequelize";

const Producto = sequelize.define(
  "Producto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precioCosto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    precioVenta: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoriaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    marcaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imagenProductoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Producto;
