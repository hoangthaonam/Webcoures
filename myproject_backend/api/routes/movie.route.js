const express = require('express');
var movieRoute = express.Router();
var movieController = require('../controllers/movie.controller');

movieRoute.get('/',movieController.getMovie);

module.exports = movieRoute;