'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: DataTypes.STRING,
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
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