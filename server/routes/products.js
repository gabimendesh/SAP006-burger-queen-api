const { Router } = require('express');
const { createProducts, getProducts } = require('../controller/products');

const router = Router();

router.post('/products', createProducts);
router.get('/products', getProducts);

module.exports = router;
