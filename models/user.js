'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
      unique: true,
      primaryKey: true,
			validate: {
				isEmail: true,
				notEmpty: true
			}
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  User.associate = function(models) {
    User.hasMany(models.Todo, {
      onDelete: 'cascade'
    });
  };

  return User;

};