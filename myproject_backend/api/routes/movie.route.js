const express = require('express');
var movieRoute = express.Router();
var movieController = require('../controllers/movie.controller');
var movieMiddleware = require('../middlewares/movie.middleware');

movieRoute.get('/',movieController.getMovie);
movieRoute.post('/addLove',movieController.addLove);
movieRoute.post('/add',movieMiddleware.validateAddMovie,movieController.add);
// movieRoute.post('/lovelist',movieController.showLoveList);
movieRoute.post('/getLove',movieController.getLove);

module.exports = movieRoute;