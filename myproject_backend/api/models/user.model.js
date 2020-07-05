const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({ username: String, password:String, favorite:[{movieId: String}]},{versionKey:false});
var User = mongoose.model('User',userSchema,'users');
module.exports = User;
