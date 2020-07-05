import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu'
import Add from './components/Add'
import Content from './components/Content'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/Register'
import Details from './components/Details'


function App() {
  // let { movieId } = React.useParams();
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
        <Route path = "/register" exact>
          <Register/>
        </Route>
        <PrivateRoute path = "/home" >
          <Content/>
        </PrivateRoute>
        <PrivateRoute path = "/add" exact>
          <Add buttonLabel={'Add'}/>
        </PrivateRoute>
        <PrivateRoute path = "/details/:movieId" exact>
          <Details />
        </PrivateRoute>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
