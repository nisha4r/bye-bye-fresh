const { Model, DataTypes } = require('sequelize');
// bringing in sequelize connection 
const sequelize = require('../config/connection');


// creates the Ingredient model
const Ingredients = sequelize.define('Ingredients', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Ingredients;