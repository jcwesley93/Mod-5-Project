import React from 'react'

import signupHeader from '../Images/signupHeader.jpg'

import { connect } from 'react-redux'
import { setCurrentUser, toggleLoggedIn } from '../Redux/actions'

import { Grid, Header, Image, Form, Segment, Button, Message, FormInput } from 'semantic-ui-react'

class Signup extends React.Component{

  state={
    name: "", 
    email: "", 
    username: "",
    password: "", 
    passwordConfirmation: "", 
    profilePhoto: "", 
    birthday: "", 
    favBeautyBrand: ""
  }

  handleOnChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault(); 
    console.log(this.state)

    if(this.state.password === this.state.passwordConfirmation){
      fetch('http://localhost:3005/api/v1/users', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }, 
        body: JSON.stringify({
          user: {
            name: this.state.name, 
            email: this.state.email, 
            username: this.state.username, 
            password_digest: this.state.passwordConfirmation, 
            avatar_image: this.state.profilePhoto, 
            birthday: this.state.birthday, 
            favorite_beauty_brands: this.state.favBeautyBrand, 
            status: "I wake up looking this good, and I wouldn't change it if I could - Queen Bey"
          }
        })
      })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem("token", res.jwt);
        this.props.setCurrentUser(res.user);
      })
      .then(this.props.loggedIn())
      .then(this.props.history.push("/dashboard"))
    } else{
        alert("The passwords do not match!")
    }
  }


    render(){
        return(<div>
          <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 700 }}>
            <Header as='h2' color='pink' textAlign='center'>
              <Image src={signupHeader} style={{ width: 700, height: 500}}/>
              welcome to the fam. 
            </Header>
              <Form size="large" onSubmit={this.handleOnSubmit}textalign='left' >
                 <Segment stacked>
                   <Form.Field>
                    <label>Name</label>
                    <Form.Input type="text" name="name" onChange={this.handleOnChange} value={this.state.name} placeholder='name'/>
                   </Form.Field>
                   <Form.Field>
                     <label>Email</label>
                    <Form.Input type="text" name="email" onChange={this.handleOnChange} value={this.state.email} placeholder='email'/>
                   </Form.Field>
                   <Form.Field>
                     <label>Username</label>
                     <Form.Input type="text" name="username" onChange={this.handleOnChange} value={this.state.username} placeholder='username'/>
                   </Form.Field>
                   <Form.Field>
                    <label>Password</label>
                    <Form.Input type="password" name="password" onChange={this.handleOnChange} value={this.state.password} placeholder='password'/>
                   </Form.Field>
                   <Form.Field>
                     <label>Confirm Password</label>
                    <Form.Input type="password" name="passwordConfirmation" onChange={this.handleOnChange} value={this.state.passwordConfirmation} placeholder='confirm password'/>
                   </Form.Field>
                   {/* how to upload a photo from the computer */}
                   <Form.Field>
                     <label>Profile Photo </label>
                    <Form.Input type="text" name="profilePhoto" onChange={this.handleOnChange} value={this.state.profilePhoto} placeholder='profile photo url'/>
                   </Form.Field>
                   <Form.Field>
                     <label>Birthday</label>
                     <Form.Input type="date" name="birthday" onChange={this.handleOnChange} value={this.state.birthday} placeholder='birthday'/>
                   </Form.Field>
                   <Form.Field>
                     <label>Favorite Beauty Brand</label>
                     <Form.Input type="text" name="favBeautyBrand" onChange={this.handleOnChange} value={this.state.favBeautyBrand} placeholder="favorite beauty brand"/>
                   </Form.Field>
                   <Button color="pink" fluid size='medium' type='submit' value="SUBMIT">Sign up!</Button>
              </Segment>
            </Form>
          </Grid.Column>
          </Grid>
        </div>
            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setCurrentUser: (userObject) => dispatch(setCurrentUser(userObject)), 
    loggedIn: (userObject) => dispatch(toggleLoggedIn(userObject))
  }
}

export default connect(null, mapDispatchToProps)(Signup)



//confirm that passwords match 
//send a post request to create a new user. 

//use the response to set current user
//toggle the logged in value to true. 
//send them to the dashboard. 