'use strict';
module.exports = (sequelize, DataTypes) => {
  const deck = sequelize.define('deck', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  deck.associate = function(models) {
    // associations can be defined here
  };
  return deck;
};