const express = require('express')
const app = express()
app.set('view engine', 'pug'); // Sử dụng pug làm view engine
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

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


app.get('/', function (req, res) {
  res.render('index',{data:data})
  // res.send('<form action="/movie/search"><input type="text" name="name"/><button>Search</button></form>')
})
app.get('/movie', function (req, res) {
  res.send(data)
})
app.get('/movie/search', function (req, res) {
  const {name} = req.query;
  const result = data.filter(item=>name.toLocaleLowerCase() == item.name.toLocaleLowerCase());
  res.render('index',{data:result});
})
app.get('/movie/create', function (req, res) {
  res.render('add');
})
app.post('/movie/create', function (req, res) {
  data.push(req.body);
  res.redirect('/');
})
app.get('/movie/:id', function (req, res) {
  const id = req.params.id;
  const result = data.filter((item)=>{    
    if(item.id==id) return true;
  })
  res.send(result)
}) 
app.listen(3000)