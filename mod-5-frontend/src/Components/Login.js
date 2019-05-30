import React from 'react'

import { connect } from 'react-redux'
import { setCurrentUser, setMakeupBags, setShoppingLists, toggleLoggedIn} from "../Redux/actions"
import { Link } from 'react-router-dom'

import loginHeader from "../Images/loginHeader.jpg"

import { Grid, Header, Image, Form, Segment, Button, Message} from 'semantic-ui-react'


class Login extends React.Component {

    state={
        username: "", 
        password: "", 
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmitForm = (event) => {
        event.preventDefault()
        fetch('http://localhost:3005/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: this.state.username,
            password: this.state.password
          }
        })
      })
      .then(r => r.json())
      .then(res =>{
        localStorage.setItem("token", res.jwt);
        this.props.setCurrentUser(res.user);
        this.props.setMakeupBags(res.user.makeup_bags);
        this.props.setShoppingLists(res.user.shopping_lists);
      })
      .then(this.props.toggleLoggedIn());
        this.props.history.push("/dashboard")
    }

    render(){
        return(<div>
          <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 600 }}>
              <Header as='h2' color='pink' textAlign='center'>
                Login
                <Image src={loginHeader} style={{ width: 600, height: 400}}/>
              </Header>
            <Form size="large" onSubmit={this.handleSubmitForm}>
              <Segment stacked>
                <Form.Input type="text" name= "username" onChange={this.handleOnChange} value={this.state.username} placeholder='Username'/>
                <Form.Input type="password" name= "password" onChange={this.handleOnChange} value={this.state.password} placeholder="Password" />
                <Button color="pink" fluid size='large' type="submit" value="SUBMIT">Login</Button>
            </Segment>
          </Form>
          <Message>
            New here? <Link to='/signup'> Sign Up </Link>
          </Message>
          </Grid.Column>
          </Grid>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
  return{
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setCurrentUser: (userObject) => dispatch(setCurrentUser(userObject)), 
    setMakeupBags: (userMakeupBagObject) => dispatch(setMakeupBags(userMakeupBagObject)), 
    setShoppingLists: (userShoppingListObject) => dispatch(setShoppingLists(userShoppingListObject)), 
    toggleLoggedIn: (userObject) => dispatch(toggleLoggedIn(userObject))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

//on login, send a post request to the backend and recieve the user and a jwt token
//set the user response as the current user 
//dispatch an action that sets the loggedIn state to true. 
//conditionally render the log in button 