import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// Credenciales de la base de datos
const database = 'rn';
const username = 'postgres';
const password = 'admin';
const host = 'localhost';
const port = '5432';
const dialect = 'postgres'

const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: dialect,
});

export default sequelize;
