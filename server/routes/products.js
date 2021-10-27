const { Router } = require('express');
const {
  createProducts,
  getProducts,
  deleteProducts,
  getProductById,
  updateProducts,
} = require('../controller/productsController');

const router = Router();

router.post('/products', createProducts);
router.get('/products', getProducts);
router.get('/products/:productId', getProductById);
router.delete('/products/:productId', deleteProducts);
router.put('/products/:productId', updateProducts);

module.exports = router;
