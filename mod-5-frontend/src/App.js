import React from 'react';

import Home from './Components/Home'
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import ProductsContainer from "./Containers/ProductsContainer"
import Dashboard from './Components/Dashboard'
import ShoppingListView from './Components/ShoppingListView'
import MakeupBagView from './Components/MakeupBagView'
import NewShoppingListForm from './Components/ShoppingList/NewShoppingListForm';

import { Route, Switch, Link } from 'react-router-dom'



function App() {
  return (<div className="App">
  <h1> Mod 5 Project </h1>
  {/* <Link to={'/home'}> HOME </Link> */}
  <Link to={'/products'}> VIEW ALL PRODUCTS </Link>
  <Link to={'/login'}> LOGIN </Link>
  {/* <Link to={'/signup'}> SIGNUP </Link> */}
  <Link to={'/dashboard'}> Dashboard </Link>
  

  {/* Routes for the highest level of the app */}
  <Switch> 
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/products" component={ProductsContainer} />
    <Route exact path="/dashboard" component={Dashboard}/>
    <Route exact path="/shopping_list" component={ShoppingListView} />
    <Route exact path="/makeup_bag" component={MakeupBagView} />
    <Route exact path="/new_shopping_list" component={NewShoppingListForm} />
  </Switch>
  </div>
  );
}

export default App;
