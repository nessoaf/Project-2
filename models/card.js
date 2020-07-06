'use strict';
module.exports = (sequelize, DataTypes) => {
  const card = sequelize.define('card', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    land: DataTypes.BOOLEAN,
    imageUrl: DataTypes.STRING
  }, {});
  card.associate = function(models) {
    // associations can be defined here
  };
  return card;
};