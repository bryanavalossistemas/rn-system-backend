// import DataTypes from "sequelize";
// import sequelize from "../configs/database.js";
// import Usuario from './Usuario.js'

// const Administrador = sequelize.define(
//   "Administrador",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     usuario_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },
//   {
//     timestamps: false,
//     freezeTableName: true,
//   }
// );

// Administrador.belongsTo(Usuario, {
//   foreignKey: 'usuario_id',
//   targetId: 'id'
// });

// const createTable = async () => {
//   try {
//     await Administrador.sync(); // Sincroniza la tabla con la base de datos
//     console.log("Tabla 'Administrador' creada exitosamente.");
//   } catch (error) {
//     console.error("Error al crear la tabla 'Administrador':", error);
//   }
// };

// createTable(); // Llamamos la función para intentar crear la tabla

// export default Administrador;