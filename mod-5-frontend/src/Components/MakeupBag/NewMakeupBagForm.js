import React from 'react'

import { connect } from 'react-redux'
import { updateMakeupBags } from "../../Redux/actions"
import { Link } from 'react-router-dom'

import { Grid, Form, Segment, Header, Button, Label } from 'semantic-ui-react'

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
      <Grid textAlign='center' style={{height: '50vh'}} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 600}}>
        <Header size='large'>Create New Makeup Bag </Header>
      <Form onSubmit={this.handleFormSubmission}> 
        <Segment stacked>
        <Label> Makeup Bag Name: </Label>
        <Form.Input onChange={this.handleInputChange} type="text" name="name" placeholder="Makeup Bag Name"/>
        <Label> Makeup Bag Description: </Label>
        <Form.Input onChange={this.handleInputChange} type="text" name="description" placeholder="Makeup Bag Description"/>
        <Button color='pink' type="submit" value="Submit" name="submit"> Submit </Button>
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
  return{ updateMakeupBags: (newMakeupBag) => dispatch(updateMakeupBags(newMakeupBag))}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMakeupBagForm) 