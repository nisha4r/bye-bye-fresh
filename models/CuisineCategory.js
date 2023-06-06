const { Model, DataTypes } = require('sequelize');
// bringing in sequelize connection 
const sequelize = require('../config/connection');
const Recipes = require('./Recipes');

const CuisineCategory = sequelize.define('CuisineCategory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});




module.exports = CuisineCategory;