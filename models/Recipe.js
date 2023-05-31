// establishes connections and required packages
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// extends the model with the class recipe
class Recipe extends Model {}

// initiates the recipe model, allows for string input, gives name recipe
Recipe.init({
  name: DataTypes.STRING,
}, { sequelize, modelName: 'recipe' });