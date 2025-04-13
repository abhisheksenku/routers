const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);            // GET /users
router.post('/', userController.postUsers);          // POST /users
router.get('/:id', userController.getUsersByID);     // GET /users/:id
router.put('/:id', userController.editUsers);        // PUT /users/:id
router.delete('/:id', userController.deleteUsers);   // DELETE /users/:id

module.exports = router;
