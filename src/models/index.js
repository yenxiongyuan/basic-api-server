'use strict';

//step #2, step #3 in index.js, step #1 in models animal.js
require('dotenv').config();
const { Sequelize, DataTypes} = require('sequelize');
const animal = require('./animal');

// if sqlite::memory does not work, use sqlite:memory       NODE_ENV from package.json in test and test-watch
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

// db singleton ONLY one in the database
const sequelizeDatabase = new Sequelize(DATABASE_URL);

const animalModel = animal(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  animalModel,
};
