const models = require('../db/models');

const getProducts = async (req, res) => {
  const product = await models.products.findAll();
  return res.send(product);
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

const deleteProducts = async (req, res) => {
  const product = await models.products.findOne({
    where: {
      id: req.params.productId,
    },
  });

  if (product) {
    return res.status(200).json('Product successfully deleted');
  } if (!product) {
    return res.status(400).json({
      error: 400,
      errorMessage: 'Product not found',
    });
  }
};

const updateProducts = async (req, res) => {
  const product = await models.products.findOne({
    where: {
      id: req.params.productId,
    },
  });

  if (product) {
    await models.products.update({
      name: req.body.name,
      price: req.body.price,
      flavor: req.body.flavor,
      complement: req.body.complement,
      image: req.body.image,
      type: req.body.type,
      sub_type: req.body.sub_type,
    }, {
      where: {
        id: req.params.productId,
      },
    });

    const updateProducts = await models.products.findOne({
      where: {
        id: req.params.productId,
      },
    });

    return res.status(200).json(res.send(updateProducts));
  } if (!product) {
    return res.status(400).json({
      error: 400,
      errorMessage: 'Product not found',
    });
  }
};

const getProductById = async (req, res) => {
  const product = await models.products.findOne({
    where: {
      id: req.params.productId,
    },
  });

  if (product) {
    return res.status(200).json(res.send(product));
  } if (!product) {
    return res.status(400).json({
      error: 400,
      errorMessage: 'Product not found',
    });
  }
};

module.exports = {
  getProducts,
  createProducts,
  deleteProducts,
  updateProducts,
  getProductById,
};
