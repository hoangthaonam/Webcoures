import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu'
import Content from './components/Content'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const data = [
    {name: "Avengers: Infinity War", rating: 0, isLove: true},
    {name: "Avengers: Endgame", rating: 0, isLove: false},
    {name: "Inception", rating: 0, isLove: true},
    {name: "Hobbs And Shaw", rating: 0, isLove: false},
    {name: "Frozen II", rating: 0, isLove: false},
    {name: "1917", rating: 0, isLove: false},
    {name: "Parasite", rating: 0, isLove: false},
    {name: "Joker", rating: 0, isLove: false},
    {name: "pacific rim", rating: 0, isLove: false},
    {name: "The Lion King", rating: 0, isLove: false},
  ]
  // const users = [
  //   {id: 1, username:"htn", password:"123",isLoggin:false}
  // ]
  // localStorage.setItem("movies",JSON.stringify(data))
  return (
    <Router>
    <div className="App">
      {/* <Menu users = {users}/> */}
      <Menu/>
      <Switch>
        <Route path = "/" exact>
          <Login/>
        </Route>
        <PrivateRoute path = "/home" exact>
          <Content data = {data}/>
        </PrivateRoute>
        {/* <Route><Content data = {data}/></Route> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
