const { Router } = require('express');

const productsRouter = require('./products');

const router = Router();

// aqui vai todas as rotas
router.use('/', productsRouter);

module.exports = router;
