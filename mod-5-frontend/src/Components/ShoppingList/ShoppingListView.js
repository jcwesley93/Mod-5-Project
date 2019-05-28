 import React from 'react'

 import EditShoppingListForm from "./EditShoppingListForm"

import { connect } from 'react-redux'
import {setSelectedShoppingList, removeShoppingList} from "../../Redux/actions"
import ProductCard from '../ProductCard';


class ShoppingListView extends React.Component{
 
  componentDidMount(){
    fetch(`http://localhost:3005/api/v1/shopping_lists/${this.props.selectedList.id}`)
    .then(res => res.json())
    .then(res => this.props.setSelectedShoppingList(res))
  }

  handleDelete = (event) => {
    event.preventDefault(); 
    
    fetch(`http://localhost:3005/api/v1/shopping_lists/${this.props.selectedList.id}`, {
      method: 'DELETE', 
      headers:{
        'Content-Type': 'application/json', 
        'Accepts': 'application/json'
      }
    })
    .then(res => res.json())
    .then(this.props.removeShoppingList(this.props.selectedList))
    this.props.history.push('/dashboard')
  } 


  render(){
    return(<div>
      <h1>{this.props.selectedList.name}</h1>
      <h4>{this.props.selectedList.description}</h4>
      <EditShoppingListForm />
      <button onClick={this.handleDelete}> Delete Shopping List </button>
      <br/>
      <br/>
      {this.props.selectedList.products && this.props.selectedList.products.length > 0 ? this.props.selectedList.products.map(list => <ProductCard name={list.name} image={list.image} />) : <p> There are no products on this list! </p>}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    selectedList: state.selectedShoppingList
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeShoppingList: (selectedList) => dispatch(removeShoppingList(selectedList)), 
    setSelectedShoppingList: (selectedList) => dispatch(setSelectedShoppingList(selectedList))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListView)
