import React from 'react'

import { connect } from'react-redux'



class ProductCard extends React.Component{

  state={
    makeupBagClicked: false, 
    shoppingListClicked: false, 
    selectedBagID: null
  }

  handleMBOnClick = (event) =>{
    event.preventDefault(); 
    this.setState({
      makeupBagClicked: !this.state.clicked
    })
    console.log(this.props.id)
  }

  handleSLOnClick = (event) =>{
    event.preventDefault(); 
    this.setState({
     shoppingListClicked: !this.state.clicked
    })
  }

  handleOnChange = (event) => {
    this.setState({
      selectedBagID: event.target.value
    })
    console.log(this.state.selectedBagID)
  }

  handleAddToMakeupBag = (event) => {
    console.log(this.state.selectedBagID, this.props.id)
    event.preventDefault();
    fetch('http://localhost:3005/api/v1/makeup_bag_products', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      body:JSON.stringify({
        makeup_bag_id: this.state.selectedBagID, 
        product_id: this.props.id
      })
    })
    .then(res => res.json())
    .then(console.log)
  }//need to add it to the global state

  

  render(){
  return(<div> 
    <p>{this.props.name}</p>
    <img src={this.props.image} alt={this.props.name}/>
    <p>{this.props.description}</p>
    
    {this.state.makeupBagClicked ? 
    <div>
      <select value={this.state.selectedBagID} onChange={this.handleOnChange}>
        <option value="null"> Select A Makeup Bag</option>
        {this.props.makeupBags.map(list => <option value={list.id}>{list.name}</option> )}
      </select>
      <br/>
      <button onClick={this.handleAddToMakeupBag}> Add It!</button>
      </div>
      : <button value='Makeup Bag' onClick={(event) => this.handleMBOnClick(event) }> Add to Makeup Bag </button>}






    {this.state.shoppingListClicked ? <p> render the dropdown </p> : <button value='Shopping List' onClick={(event) => this.handleSLOnClick(event) }> Add to Shopping List </button>}
  </div>
  )
  }
}

const mapStateToProps = (state) => {
  return{
    user: state.currentUser, 
    makeupBags: state.makeupBags
  }
}

export default connect(mapStateToProps)(ProductCard)