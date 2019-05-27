import React from 'react'

import { connect } from 'react-redux'

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
  return{
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewShoppingListForm) 

// set local state to control the form 
//on submit, make a post request to the current user's account. 
//use gloabl state to access current user & also add them to the shopping lists array. 

//can you use .push when setting state? 
