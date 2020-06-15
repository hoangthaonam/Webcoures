const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies',{useUnifiedTopology: true,useNewUrlParser: true});
var cors = require('cors');
app.use(cors());

var corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

var movieRoute = require('./api/routes/movie.route');

app.use('/api/movie',cors(), movieRoute);

const port = 3001;
app.listen(port);