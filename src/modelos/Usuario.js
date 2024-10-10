import DataTypes from "sequelize";
import sequelize from "../configuraciones/BaseDeDatos.js";
import ModeloRol from "./Rol.js";

const ModeloUsuario = sequelize.define(
  "Usuario",
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
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contrasenia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rolId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

ModeloUsuario.belongsTo(ModeloRol, {
  foreignKey: "rolId",
  as: "rol",
});

export default ModeloUsuario;
