'use strict';

//step #1 step #2 in model index.js
module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('animals', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pronouns: {
      type: DataTypes.ENUM,
      values: ['they/them', 'she/her', 'he/him'],
      allowNull: true,
    },
  });
};
