import React from 'react'

import { connect } from 'react-redux'

class ShoppingListView extends React.Component{
  render(){
    return(<div></div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    selectedList: state.selectedShoppingList
  }
}

export default connect(mapStateToProps)(ShoppingListView)