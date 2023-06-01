DROP DATABASE IF EXISTS byebyefresh_db;

CREATE DATABASE byebyefresh_db;

USE byebyefresh_db;

- Creates the Recipe table
CREATE TABLE Recipe (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);

-- Creates the Ingredient table
CREATE TABLE Ingredient (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);

-- Create sthe RecipeIngredient table with multiple foreign keys to allow for many-to-many relationship
CREATE TABLE RecipeIngredient (
  id INT PRIMARY KEY AUTO_INCREMENT,
  recipeId INT NOT NULL,
  ingredientId INT NOT NULL,
  FOREIGN KEY (recipeId) REFERENCES Recipe(id),
  FOREIGN KEY (ingredientId) REFERENCES Ingredient(id)
);