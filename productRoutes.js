const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
router.get('/',productController.getProducts);
router.get('/:id',productController.getProductsByID);
router.post('/:id',productController.postProducts);
router.put('/:id',productController.editProducts);
router.delete('/:id',productController.deleteProducts);
module.exports = router;