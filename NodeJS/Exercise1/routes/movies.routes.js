const express = require('express');
const movie = express.Router();
var bodyParser = require('body-parser')
movie.use(bodyParser.urlencoded({ extended: false }));
movie.use(bodyParser.json())
movie.set('view engine', 'pug');
const data = [
    {id: 1, name: "Avengers: Infinity War", rating: 0, isLove: true},
    {id: 2, name: "Avengers: Endgame", rating: 0, isLove: false},
    {id: 3, name: "Inception", rating: 0, isLove: true},
    {id: 4, name: "Hobbs And Shaw", rating: 0, isLove: false},
    {id: 5, name: "Frozen II", rating: 0, isLove: false},
    {id: 6, name: "1917", rating: 0, isLove: false},
    {id: 7, name: "Parasite", rating: 0, isLove: false},
    {id: 8, name: "Joker", rating: 0, isLove: false},
    {id: 9, name: "pacific rim", rating: 0, isLove: false},
    {id: 10, name: "The Lion King", rating: 0, isLove: false},
  ]

movie.get('/movie', function (req, res) {
    res.render('index',{data:data})
  })
movie.get('/movie/search', function (req, res) {
    const {name} = req.query;
    const result = data.filter(item=>name.toLocaleLowerCase() == item.name.toLocaleLowerCase());
    res.render('index',{data:result});
  })
movie.get('/movie/create', function (req, res) {
    res.render('add');
  })
movie.post('/movie/create', function (req, res) {
    data.push(req.body);
    res.redirect('/');
  })
movie.get('/movie/:id', function (req, res) {
    const id = req.params.id;
    const result = data.filter((item)=>{    
      if(item.id==id) return true;
    })
    res.send(result)
  }) 
module.exports = movie