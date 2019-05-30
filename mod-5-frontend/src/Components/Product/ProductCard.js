import React from 'react'

import { connect } from 'react-redux'
import { Card, Image, Button, Modal, Header } from 'semantic-ui-react'



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
  }

  handleSLOnClick = (event) =>{
    event.preventDefault(); 
    this.setState({
     shoppingListClicked: !this.state.clicked
    })
  }

  handleAddToShoppingList = (event) => {
    console.log(this.state.selectedBagID, this.props.id)
    event.preventDefault();
    fetch('http://localhost:3005/api/v1/shopping_list_products', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      body:JSON.stringify({
        shopping_list_id: this.state.selectedBagID, 
        product_id: this.props.id
      })
    })
    .then(res => res.json())
    .then(console.log)
    this.setState({
      shoppingListClicked: !this.state.shoppingListClicked
      
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

  handleMBCancel = () => {
    this.setState({
      makeupBagClicked: !this.state.makeupBagClicked
    })
  }

  handleSLCancel = () => {
    this.setState({
      shoppingListClicked: !this.state.shoppingListClicked
    })
  }


render(){
let cardStyle = {
   margin:'15px'
 }
 console.log(this.props)
  return(
   <div>
    <Card style={cardStyle}>
    <Modal trigger={<Image src={this.props.image} alt={this.props.name} wrapped ui={false}/>}>
      <Modal.Header>{this.props.name}</Modal.Header>
      <Modal.Content image ><Image wrapped size="large" src={this.props.image}/>
      <Modal.Description>
        <Header> {this.props.brand}</Header>
        <p>{this.props.description}</p>
        <p>Sold At: {this.props.sold_at.toUpperCase()}</p>
        <p>${this.props.price}</p>
        <p>Category: {this.props.category}</p>
      </Modal.Description>
    </Modal.Content>
    </Modal>
    <Card.Content>
    <Card.Header> {this.props.name} </Card.Header>
    <Card.Meta>{this.props.category}</Card.Meta>
    </Card.Content>
    {/* makeup bag menu */}
    {this.state.makeupBagClicked ? 
    <div>
      <select value={this.state.selectedBagID} onChange={this.handleOnChange}>
        <option value="null"> Select A Makeup Bag</option>
        {this.props.makeupBags.map(list => <option value={list.id}>{list.name}</option> )}
      </select>
      <br/>
      <Button onClick={this.handleAddToMakeupBag}> Add It!</Button>
      <Button onClick={this.handleMBCancel}> Cancel </Button>
    </div>
      : <Button value='Makeup Bag' onClick={(event) => this.handleMBOnClick(event) }> Add to Makeup Bag </Button>}

    {/* shopping list menu */}
    {this.state.shoppingListClicked ? 
    <div>
      <select value={this.state.selectedBagID} onChange={this.handleOnChange}>
        <option value="null"> Select A Shopping List </option>
        {this.props.shoppingLists.map(list => <option value={list.id}>{list.name}</option> )}
      </select>
      <br/>
      <Button onClick={this.handleAddToShoppingList}> Add it! </Button>
      <Button onClick={this.handleSLCancel}> Cancel </Button>


    </div> : <Button value='Shopping List' onClick={(event) => this.handleSLOnClick(event) }> Add to Shopping List </Button> }



    
  
  </Card>
  </div>
  )
}

}

const mapStateToProps = (state) => {
  return{
    user: state.currentUser, 
    makeupBags: state.makeupBags,
    shoppingLists: state.shoppingLists
  }
}

export default connect(mapStateToProps)(ProductCard)