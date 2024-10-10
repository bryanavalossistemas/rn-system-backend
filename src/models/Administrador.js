import DataTypes from "sequelize";
import sequelize from "../configs/database.js";
import Usuario from "./Usuario.js";

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

Administrador.belongsTo(Usuario, {
  foreignKey: "usuarioId",
  as: "usuario",
});

export default Administrador;
