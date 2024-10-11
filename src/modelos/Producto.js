import sequelize from "../configuraciones/BaseDeDatos.js";
import DataTypes from "sequelize";
import ModeloCategoria from "./Categoria.js";
import ModeloMarca from "./Marca.js";
import ModeloImagenProducto from "./ImagenProducto.js";

const ModeloProducto = sequelize.define(
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
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    freezeTableName: true,
  }
);

ModeloProducto.belongsTo(ModeloCategoria, {
  foreignKey: "categoriaId",
  as: "categoria",
});
ModeloProducto.belongsTo(ModeloMarca, { foreignKey: "marcaId", as: "marca" });
ModeloProducto.belongsTo(ModeloImagenProducto, {
  foreignKey: "imagenProductoId",
  as: "imagenProducto",
  onDelete: "NO ACTION",
});

export default ModeloProducto;
