'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    email: DataTypes.STRING
  }, {});
  
  Todo.associate = function(models) {
    Todo.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  };

  return Todo;

};