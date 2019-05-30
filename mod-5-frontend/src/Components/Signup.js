import React from 'react'

import signupHeader from '../Images/signupHeader.jpg'

import { connect } from 'react-redux'
import { setCurrentUser } from '../Redux/actions'

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
  }


    render(){
        return(<div>
          <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 700 }}>
            <Header as='h2' color='pink' textAlign='center'>
              <Image src={signupHeader} style={{ width: 700, height: 500}}/>
              welcome to the fam. 
            </Header>
              <Form size="medium" onSubmit={this.handleOnSubmit}textAlign='left' >
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
    setCurrentuser: (userObject) => dispatch(setCurrentUser(userObject))
  }
}

export default connect(null, mapDispatchToProps)(Signup)