/* eslint-disable no-console */
const models = require('../db/models');

const getProducts = async (req, res) => {
  const products = await models.products.findAll();
  return res.send(products);
};

const createProducts = async (req, res) => {
  const product = await models.products.create({
    name: req.body.name,
    price: req.body.price,
    flavor: req.body.flavor,
    complement: req.body.complement,
    image: req.body.image,
    type: req.body.type,
    sub_type: req.body.sub_type,
  });

  return res.send(product);
};

module.exports = { getProducts, createProducts };
