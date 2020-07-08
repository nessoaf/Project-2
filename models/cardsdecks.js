'use strict';
module.exports = (sequelize, DataTypes) => {
  const cardsdecks = sequelize.define('cardsdecks', {
    cardId: DataTypes.INTEGER,
    deckId: DataTypes.INTEGER,
  }, {});
  cardsdecks.associate = function(models) {
    // associations can be defined here
  };
  return cardsdecks;
};