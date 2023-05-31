// recipeIngredient.js
const { Model } = require('sequelize');
const sequelize = require('../config/connection'); // Import your Sequelize setup

// this creates the model for the join table
class RecipeIngredient extends Model {}
RecipeIngredient.init({}, { sequelize, modelName: 'recipeIngredient' });

// This here is supposed to tell the recipe model that it has many 
// ingredients, and that the ingredient model is related to many recipes.
Recipe.belongsToMany(Ingredient, { through: RecipeIngredient });
Ingredient.belongsToMany(Recipe, { through: RecipeIngredient });
