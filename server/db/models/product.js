/* eslint-disable no-unused-vars */
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) { }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      flavor: DataTypes.STRING,
      complement: DataTypes.STRING,
      image: DataTypes.STRING,
      type: DataTypes.STRING,
      sub_type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'products',
    },
  );
  return Product;
};
