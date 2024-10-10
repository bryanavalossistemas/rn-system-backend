// import DataTypes from "sequelize";
// import sequelize from "../configs/database.js";
// import Usuario from './Usuario.js'


// const Vendedor = sequelize.define(
//   "Vendedor",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     dni: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },

//     telefono: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },

//     usuario_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },
//   {
//     timestamps: false,
//     freezeTableName: true,
//   }
// )

// Vendedor.belongsTo(Usuario, {
//     foreignKey: 'usuario_id',
//     targetId: 'id',
//     onDelete: 'CASCADE'
// });
// ;


// export default Vendedor;