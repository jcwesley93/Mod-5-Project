import React from 'react'

import { connect } from 'react-redux'
import { Card, Image, Button } from 'semantic-ui-react'



class ProductCard extends React.Component{

  state={
    makeupBagClicked: false, 
    shoppingListClicked: false, 
    selectedBagID: null
  }

  handleMBOnClick = (event) =>{
    event.preventDefault(); 
    this.setState({
      makeupBagClicked: !this.state.makeupBagclicked
    })
    console.log(this.props.id)
  }

  handleSLOnClick = (event) =>{
    event.preventDefault(); 
    this.setState({
     shoppingListClicked: !this.state.clicked
    })
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
    this.setState({
      makeupBagClicked: !this.state.makeupBagClicked
      
    })
  }//need to add it to the global state

  handleOnChange = (event) => {
    this.setState({
      selectedBagID: event.target.value
    })
    console.log(this.state.selectedBagID)
  }
render(){
let cardStyle = {
   margin:'15px'
 }
  return(
   <div>
    <Card style={cardStyle}>
    <Image src={this.props.image} alt={this.props.name} wrapped ui={false}/>
    <Card.Content>
    <Card.Header> {this.props.name} </Card.Header>
    <Card.Meta>{this.props.category}</Card.Meta>
    </Card.Content>
    {this.state.makeupBagClicked ? 
    <div>
      <select value={this.state.selectedBagID} onChange={this.handleOnChange}>
        <option value="null"> Select A Makeup Bag</option>
        {this.props.makeupBags.map(list => <option value={list.id}>{list.name}</option> )}
      </select>
      <br/>
      <Button onClick={this.handleAddToMakeupBag}> Add It!</Button>
      </div>
      : <Button value='Makeup Bag' onClick={(event) => this.handleMBOnClick(event) }> Add to Makeup Bag </Button>}


    {/* {this.state.shoppingListClicked ? <p> render the dropdown </p> : <button value='Shopping List' onClick={(event) => this.handleSLOnClick(event) }> Add to Shopping List </button>} */}
  
  </Card>
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