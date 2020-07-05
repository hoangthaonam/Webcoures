const mongoose = require('mongoose');
var Movieschema = new mongoose.Schema({name: String, url: String},{versionKey:false});
var Movie = mongoose.model('Movie', Movieschema, 'movie');
module.exports = Movie;