const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const User = require("./User");

const Plant = sequelize.define("Plant", {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  plantName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maintenance: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sunlight: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  watering: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lifespan: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  generalTips: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  benefits: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

// Set up the association
Plant.belongsTo(User, { foreignKey: "user_id" });

module.exports = Plant;
