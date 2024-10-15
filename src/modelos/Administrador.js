import DataTypes from "sequelize";
import sequelize from "../configuraciones/BaseDeDatos.js";

const Administrador = sequelize.define(
  "Administrador",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Administrador;
