const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);            // GET /products
router.post('/', productController.postProducts);          // POST /products
router.get('/:id', productController.getProductsByID);     // GET /products/:id
router.put('/:id', productController.editProducts);        // PUT /products/:id
router.delete('/:id', productController.deleteProducts);   // DELETE /products/:id

module.exports = router;
