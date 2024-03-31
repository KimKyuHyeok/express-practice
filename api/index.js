const express = require('express');
const router = express.Router();
const userController = require('./user/user.controller');


router.post('/signUp', userController.signUp);

module.exports = router;