import sequelize from "../configuraciones/BaseDeDatos.js";
import DataTypes from "sequelize";

const ModeloImagenProducto = sequelize.define(
  "ImagenProducto",
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
    publicId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default ModeloImagenProducto;
