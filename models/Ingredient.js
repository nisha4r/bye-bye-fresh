const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



const Ingredient = sequelize.define('Ingredient', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Ingredient;