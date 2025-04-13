const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.get('/',userController.getUsers);
router.get('/:id',userController.getUsersByID);
router.post('/:id',userController.postUsers);
router.put('/:id',userController.editUsers);
router.delete('/:id',userController.deleteUsers);
module.exports = router;