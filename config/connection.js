const Sequelize = require('sequelize');
require('dotenv').config();


function getsequelize()
{
  console.log(process.env.DB_NAME || "byebyefresh_db");
  console.log(process.env.DB_USER || "root");
  console.log(process.env.DB_PASSWORD || "pass");
  return sequelize;
}

const sequelize = new Sequelize(
  process.env.DB_NAME || "byebyefresh_db",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "pass",
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = getsequelize();
