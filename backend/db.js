const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "DeltaHacks2025",           // Database name
  "deltahacks_user",          // Database user
  "deltahacks",               // Database password
  {
    host: "localhost",        // Host where the database is running
    port: 5432,               // PostgreSQL port
    dialect: "postgres",      // Specifies the database type (PostgreSQL in this case)
  }
);

module.exports = sequelize;

