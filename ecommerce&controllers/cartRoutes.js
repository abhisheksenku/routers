const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// GET cart for a user
router.get('/:userId', cartController.getCartByUserID);  // GET /cart/:userId

// POST add product to user's cart
router.post('/:userId/:productId', cartController.addProductToCart);  // POST /cart/:userId/:productId

// PUT update cart (if needed)
router.put('/:userId', cartController.editCart);  // PUT /cart/:userId

// DELETE remove cart or product from cart
router.delete('/:userId', cartController.deleteCart);  // DELETE /cart/:userId

module.exports = router;
