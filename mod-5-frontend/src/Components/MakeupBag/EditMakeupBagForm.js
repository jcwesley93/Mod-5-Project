import React from 'react'

import {setSelectedMakeupBag} from "../../Redux/actions"
import { connect } from 'react-redux'

class EditMakeupBagForm extends React.Component{
  state={
    name: this.props.selectedMakeupBag.name, 
    description: this.props.selectedMakeupBag.description, 
    clicked: false
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnClick = (event) => {
    event.preventDefault();
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleUpdateMakeupBag = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3005/api/v1/makeup_bags/${this.props.selectedMakeupBag.id}`, {
      method: 'PATCH', 
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }, 
      body: JSON.stringify({
        name: this.state.name, 
        description: this.state.description
      })
    })
    .then(res => res.json())
    .then(res => this.props.setSelectedMakeupBag(res))
    .then(this.setState({
      clicked: !this.state.clicked
    }))
  }   
  
  render(){
    if(this.state.clicked){
    return(<div>
      <form>
        <label> Makeup Bag Name: </label>
        <input onChange={this.handleOnChange} type="text" name="name" value={this.state.name} />
        <br/>
        <label> Makeup Bag Description: </label>
        <input onChange={this.handleOnChange} type="text" name="description" value={this.state.description}/>
        <br/>
        <button onClick={this.handleUpdateMakeupBag}> Update Makeup Bag </button>
      </form>
    </div>)
    } else {
      return(
        <button onClick={this.handleOnClick}> Edit Makeup Bag </button>
      )
    }
  }
  }


const mapStateToProps = (state) => {
  return{
    selectedMakeupBag: state.selectedMakeupBag
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setSelectedMakeupBag: (selectedMakeupBag) => dispatch(setSelectedMakeupBag(selectedMakeupBag))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditMakeupBagForm)