const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const isAuthenticated = require('../middleware/authValidation');
const authorize = require('../middleware/roleValidation');

// Unprotected endpoints
router.post('/', userController.createUser);

// Session validation
router.use(isAuthenticated)

// Protected endpoints 
router.get('/all', authorize('user'), userController.getUsers)
router.get('/:id', userController.getUser)
router.patch('/:id', userController.updateUser)

module.exports = router