import React from 'react';

import Home from './Components/Home'
import Login from "./Components/Login"
import Signup from "./Components/Signup"

import { Route, Switch } from 'react-router-dom'

// home leads to home 
//login redirects the profile page once auth is done. 
//signup leads to signup form, then redirect to profile page once create is valid. 

function App() {
  return (<div className="App">
  <Switch> 
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
  </Switch>
  </div>
  );
}

export default App;
