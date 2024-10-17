import sequelize from "../configuraciones/BaseDeDatos.js";
import DataTypes from "sequelize";

const Proveedor = sequelize.define(
  "Proveedor",
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
    ruc: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    celular: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
export default Proveedor;
