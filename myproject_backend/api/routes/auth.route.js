const express = require('express');
var authRoute = express.Router();
var authController = require('../controllers/auth.controller');
var authMidleware = require('../middlewares/auth.middleware');
authRoute.post('/',authMidleware.loginValidate,authController.login);
authRoute.post('/register',authMidleware.registerValidate, authController.register);

module.exports = authRoute;