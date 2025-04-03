const express = require('express');
const ProductStorage = require('../adapters/ProductStorage');
const ProductRepository = require('../domain/ProductRepository');
const ProductService = require('../usecase/ProductService'); // Note: usecase instead of usecases
const ProductController = require('../adapters/ProductController');

module.exports = (app) => {
  const router = express.Router();
  const storage = new ProductStorage();
  const repository = new ProductRepository(storage);
  const service = new ProductService(repository);
  const controller = new ProductController(service);

  // API endpoints
  router.post('/products', controller.create.bind(controller));
  router.get('/products', controller.getAll.bind(controller));
  router.get('/products/:id', controller.get.bind(controller));
  router.put('/products/:id', controller.update.bind(controller));
  router.delete('/products/:id', controller.delete.bind(controller));

  app.use('/api', router);
};