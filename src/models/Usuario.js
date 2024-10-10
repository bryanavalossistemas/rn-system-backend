// import DataTypes from "sequelize";
// import sequelize from "../configs/database.js";

// import Rol from './Rol.js'


// const Usuario = sequelize.define(
//   "Usuario",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     nombre: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     usuario: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     contrasenia: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     rol_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },
//   {
//     timestamps: false,
//     freezeTableName: true,
//   }
// )

// Usuario.belongsTo(Rol, {
//     foreignKey: 'rol_id',
//     targetId: 'id'
// });
// ;


// export default Usuario;