const { Model, DataTypes } = require('sequelize');
// bringing in sequelize connection 
const sequelize = require('../config/connection');
const { DataTypes } = require('sequelize');

// creates the Ingredient model
const Ingredient = sequelize.define('Ingredient', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Ingredient;