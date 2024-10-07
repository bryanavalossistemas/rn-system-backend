import sequelize from "../configs/database.js";
import DataTypes from "sequelize";
// import Product from "./Product.js";

const Categoria = sequelize.define(
  "Categoria",
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
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

// Categoria.hasMany(Product, {
//   foreignKey: "categoryId",
//   as: "products",
// });

export default Categoria;
