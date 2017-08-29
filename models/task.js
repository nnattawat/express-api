'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Task.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: 'userId'
        });
      }
    }
  });
  return Task;
};
