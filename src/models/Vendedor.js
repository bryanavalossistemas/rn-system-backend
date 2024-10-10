import DataTypes from "sequelize";
import sequelize from "../configs/database.js";
import Usuario from "./Usuario.js";

const Vendedor = sequelize.define(
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

Vendedor.belongsTo(Usuario, {
  foreignKey: "usuarioId",
  as: "usuario",
});

export default Vendedor;
