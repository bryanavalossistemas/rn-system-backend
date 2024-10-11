import sequelize from "../configuraciones/BaseDeDatos.js";
import DataTypes from "sequelize";

const ImagenProducto = sequelize.define(
  "ImagenProductos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publicidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    freezeTableName: true,
  }
);

export default ImagenProducto;