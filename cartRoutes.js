const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
router.get('/:id',cartController.getCartByID);

router.post('/:id',cartController.postCart);
router.put('/:id',cartController.editCart);
router.delete('/:id',cartController.deleteCart);
module.exports = router;