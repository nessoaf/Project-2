'use strict';
module.exports = (sequelize, DataTypes) => {
  const mtg = sequelize.define('mtg', {
    name: DataTypes.STRING,
    cardid: DataTypes.STRING
  }, {});
  mtg.associate = function(models) {
    // associations can be defined here
  };
  return mtg;
};