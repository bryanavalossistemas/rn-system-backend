import sequelize from "../configuraciones/BaseDeDatos.js";
import DataTypes from "sequelize";
import Categoria from "./Categoria.js";
import Marca from "./Marca.js";
import ImagenProducto from "./ImagenProducto.js";

const Productos = sequelize.define(
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
      references: {
        model: Categoria,
        key: "id",
      },
      allowNull: false,
    },
    marcaId: {
      type: DataTypes.INTEGER,
      references: {
        model: Marca,
        key: "id",
      },
      allowNull: false,
    },
    imagenProductoId: {
      type: DataTypes.INTEGER,
      references: {
        model: ImagenProducto,
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    freezeTableName: true,
  }
);

Productos.belongsTo(Categoria, { foreignKey: "categoriaId", as: "Categoria" });
Productos.belongsTo(Marca, { foreignKey: "marcaId", as: "Marca" });
Productos.belongsTo(ImagenProducto, { foreignKey: "imagenProductoId", as: "ImagenProducto"});

export default Productos;
