'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'userId'
      })

      this.belongsToMany(models.Product, {
        through: models.Cart_Products,
        foreignKey: 'cartId',
        otherKey: 'productId'
      })
    }
  }
  Cart.init({
    userId: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING, 
      defaultValue: 'creation'
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};