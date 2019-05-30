import React from 'react';
import HeaderComp from './Components/Header'

import Home from './Components/Home'
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import ProductsContainer from "./Containers/ProductsContainer"
import Dashboard from './Components/Dashboard'
import ShoppingListView from './Components/ShoppingList/ShoppingListView'
import MakeupBagView from './Components/MakeupBag/MakeupBagView'
import NewShoppingListForm from './Components/ShoppingList/NewShoppingListForm';
import NewMakeupBagForm from "./Components/MakeupBag/NewMakeupBagForm"

import { Route, Switch, Link } from 'react-router-dom'
import { setCurrentUser, toggleLoggedIn } from './Redux/actions';
import { connect } from 'react-redux'



class App extends React.Component {

  componentDidMount(){
    
    const token = localStorage.getItem("token")

    if (token) {
      fetch(`http://localhost:3005/api/v1/auto_login`,{
        headers:{
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(res => this.props.setCurrentUser(res))
      .then(this.props.toggleLoggedIn())
    }
  }

  render(){
  return (<div className="App">
  <HeaderComp />
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
    <Route exact path="/new_makeup_bag" component={NewMakeupBagForm}/>
  </Switch>
  </div>
  );
}}

const mapDispatchToProps = (dispatch) => {
  return{
    setCurrentUser: (userObject) => dispatch(setCurrentUser(userObject)), 
    toggleLoggedIn: (userObject) => dispatch(toggleLoggedIn(userObject))
  }
}
export default connect(null, mapDispatchToProps)(App);
