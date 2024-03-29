'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, {
        foreignKey: 'prod_id',
        through: 'Carts',
        as: 'products',
      });

      this.belongsTo(models.User, {
        foreignKey: 'owner_id',
      });
    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      type: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      quantity: DataTypes.INTEGER,
      owner_id: DataTypes.INTEGER,
      url: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
