import React from 'react'

import { connect } from 'react-redux'
import { updateMakeupBags } from "../../Redux/actions"

class NewMakeupBagForm extends React.Component{

  state={
    name: "", 
    description: ""
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmission = (event) => {
    event.preventDefault()
    fetch('http://localhost:3005/api/v1/makeup_bags', {
      method: 'POST', 
      headers: {
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
    .then(res => this.props.updateMakeupBags(res))
    this.props.history.push('/dashboard')
  }


  render(){
    return(<div> 
      <form onSubmit={this.handleFormSubmission}> 
        <label> Makeup Bag Name: </label>
        <input onChange={this.handleInputChange} type="text" name="name" placeholder="Makeup Bag Name"/>
        <label> Makeup Bag Description: </label>
        <input onChange={this.handleInputChange} type="text" name="description" placeholder="Makeup Bag Description"/>
        <input type="submit" value="Submit" name="submit"/>
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
  return{ updateMakeupBags: (newMakeupBag) => dispatch(updateMakeupBags(newMakeupBag))}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMakeupBagForm) 