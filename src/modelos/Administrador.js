import DataTypes from "sequelize";
import sequelize from "../configuraciones/BaseDeDatos.js";
import ModeloUsuario from "./Usuario.js";

const ModeloAdministrador = sequelize.define(
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

ModeloAdministrador.belongsTo(ModeloUsuario, {
  foreignKey: "usuarioId",
  as: "usuario",
});

export default ModeloAdministrador;
