'use strict';
module.exports = (sequelize, DataTypes) => {
  const deck = sequelize.define('deck', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  deck.associate = function(models) {
    // associations can be defined here
    models.deck.belongsTo(models.user) //
    models.deck.belongsToMany(models.card, {through: 'cardsdecks'})
    
  };
  return deck;
};