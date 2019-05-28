import React from 'react'

import { connect } from 'react-redux'
import {setSelectedShoppingList} from "../../Redux/actions"
import ProductCard from '../ProductCard';

class ShoppingListView extends React.Component{
  
  componentDidMount(){
    fetch(`http://localhost:3005/api/v1/shopping_lists/${this.props.selectedList.id}`)
    .then(res => res.json())
    .then(res => this.props.dispatch(setSelectedShoppingList(res)))
  }

  render(){
    return(<div>
      <h1>{this.props.selectedList.name}</h1>
      <br/>
      <br/>
      {/* this renders the list correctly, but doesn't show the message when the products array is empty. rework the conditional */}
      {this.props.selectedList.products ? this.props.selectedList.products.map(list => <ProductCard name={list.name} image={list.image} />) : <p> There are no products on this list! </p>}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    selectedList: state.selectedShoppingList
  }
}

export default connect(mapStateToProps)(ShoppingListView)