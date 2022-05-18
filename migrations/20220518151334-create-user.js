'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        unique: true, // we want all emails to be unique
        allowNull: false, // we dont want email to be null
        validate: { // validator for email
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false, // we dont want password to be null
        validate: { // validator for password length
          len: [5, 30]
        }
      },
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};