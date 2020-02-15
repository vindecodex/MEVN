const express = require('express');
const userController = require('../controllers/users');


// Routes
// Now we use Mounting Routes
const router = express.Router();

router.route('/')
.get(userController.getUsers)
.post(userController.createUser)

module.exports = router;
