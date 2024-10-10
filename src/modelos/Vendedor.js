import DataTypes from "sequelize";
import sequelize from "../configuraciones/BaseDeDatos.js";
import ModeloUsuario from "./Usuario.js";

const ModeloVendedor = sequelize.define(
  "Vendedor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    telefono: {
      type: DataTypes.STRING,
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

ModeloVendedor.belongsTo(ModeloUsuario, {
  foreignKey: "usuarioId",
  as: "usuario",
});

export default ModeloVendedor;
