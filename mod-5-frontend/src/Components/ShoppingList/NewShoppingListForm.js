import React from 'react'

import { connect } from 'react-redux'
import { updateShoppingLists } from "../../Redux/actions"
import { Link } from 'react-router-dom'

import { Grid, Form, Segment, Header, Button, Label} from 'semantic-ui-react'

class NewShoppingListForm extends React.Component{

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
      <Grid textAlign='center' style={{height: '50vh'}} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 600}}>
        <Header size='large'>Create A New Shopping List</Header>
      <Form onSubmit={this.handleFormSubmission}>
        <Segment stacked>
        <Label> Shopping List Name: </Label>
        <Form.Input onChange={this.handleInputChange} type="text" name="name" placeholder="Shopping List Name"/>
        <Label> Shopping List Description: </Label>
        <Form.Input onChange={this.handleInputChange} type="text" name="description" placeholder="Shopping List Description"/>
        <Button color='pink' type="submit" value="Submit" name="submit"> Submit</Button>
        </Segment>
      </Form>
      <br/>
        <Link to={'/dashboard'}><Button> Back To Home </Button></Link>
      </Grid.Column>
    </Grid>
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

