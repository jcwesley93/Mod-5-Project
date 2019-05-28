import React from 'react'
import { setSelectedShoppingList } from '../../Redux/actions';
import { connect } from 'react-redux'

class EditShoppingListForm extends React.Component{

  state={
    name: this.props.selectedShoppingList.name, 
    description: this.props.selectedShoppingList.description,
    clicked: false
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnClick = (event) => {
    event.preventDefault()
    this.setState({
      clicked: !this.state.clicked
    })
    console.log(this.state.clicked)
  }

  handleUpdateShoppingList = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3005/api/v1/shopping_lists/${this.props.selectedShoppingList.id}`, {
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
    .then(res => this.props.dispatch(setSelectedShoppingList(res)))
    .then(this.setState({
      clicked: !this.state.clicked
    }))
  } 


  render(){
    if(this.state.clicked){
      return(
        <div><form>
        <label> Shopping List Name: </label>
        <input onChange={this.handleOnChange} type="text" name="name" value={this.state.name}/>
        <br/>
        <label> Shopping List Description: </label>
        <input onChange={this.handleOnChange} type="text" name="description" value={this.state.description} />
        <br/>
        <button onClick={this.handleUpdateShoppingList}> Update Shopping List </button>  
      </form> 
    </div>)
    } else{
      return(
        <button onClick={this.handleOnClick}> Edit Shopping List </button>
      )
    }
  }

}

const mapStateToProps = (state) =>{
  return{
    selectedShoppingList: state.selectedShoppingList
  }
}

export default connect(mapStateToProps)(EditShoppingListForm)