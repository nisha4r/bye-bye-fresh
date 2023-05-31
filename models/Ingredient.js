// sets up the connections and required packages
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// extends the ingredient model
class Ingredient extends Model {}

//initiates the ingredient model, allows for string input, gives name ingredient
Ingredient.init({
  name: DataTypes.STRING,
}, { sequelize, modelName: 'ingredient' });