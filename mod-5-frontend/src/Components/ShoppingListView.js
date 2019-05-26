import React from 'react'

import { connect } from 'react-redux'
import {setSelectedShoppingList} from "../Redux/actions"

class ShoppingListView extends React.Component{
  
  componentDidMount(){
    fetch(`http://localhost:3005/api/v1/shopping_lists/${this.props.selectedList.id}`)
    .then(res => res.json())
    .then(res => this.props.dispatch(setSelectedShoppingList(res)))
  }

  render(){
    return(<div>
      {this.props.selectedList.name}
      {/* print out the products in tile form.  */}
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