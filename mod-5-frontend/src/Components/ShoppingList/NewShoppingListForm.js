import React from 'react'

import { connect } from 'react-redux'
import { updateShoppingLists } from "../../Redux/actions"

class NewShoppingListForm extends React.Component{

  state={
    name:"", 
    description:"", 
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmission = (event) => {
    event.preventDefault()
    console.log(this.state)
    console.log(this.props.currentUser.id)

    fetch('http://localhost:3005/api/v1/shopping_lists', {
      method:'POST', 
      headers:{
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      }, 
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description, 
        user_id: this.props.currentUser.id
      })
    })
    .then(res => res.json())
    .then(res => this.props.updateShoppingLists(res))
    this.props.history.push("/dashboard")
  }

  render(){
    return(<div>
      <form onSubmit={this.handleFormSubmission}>
        <label> Shopping List Name: </label>
        <input onChange={this.handleInputChange} type="text" name="name"/>
        <label> Shopping List Description: </label>
        <input onChange={this.handleInputChange} type="text" name="description"/>
        <input type="submit" value="Submit" name="submit" />
      </form>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return{ updateShoppingLists: (newShoppingList) => dispatch(updateShoppingLists(newShoppingList))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewShoppingListForm) 

