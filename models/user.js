'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: { // validator for email
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: { // validator for email
        len: [5, 10]
      }
    },
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user) => {
    console.log("User object before encryption", user);
    const encryptedPassword = bcrypt.hashSync(user.password);
    user.password = encryptedPassword;
    console.log("user object after encryption", user);
  });

  return User;
};