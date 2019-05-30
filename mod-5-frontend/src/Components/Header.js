import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { Menu, Header, Container } from 'semantic-ui-react'
import { toggleLoggedIn, setCurrentUser } from '../Redux/actions';

class HeaderComp extends React.Component{


handleLogOut = () => {
  localStorage.removeItem('token')
  this.props.toggleLoggedIn()
  this.props.setCurrentUser({})
}


  render(){
    return(<div>
  <Container textAlign='center'>
  <Header size='huge'> I Don't Have A Name </Header>
  <Header size='medium'> Let's all be glad the project is even done. </Header>
  </Container>
  <Menu pointing secondary>
    <Menu.Item><Link to={'/home'}> Home </Link></Menu.Item>
    <Menu.Item><Link to={'/products'}> Products </Link></Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>{this.props.loggedIn ? <Link to={'/home'} onClick={() => this.handleLogOut()}> Log out </Link>: <Link to={'/login'}> Login </Link> }</Menu.Item> 
      <Menu.Item>{this.props.loggedIn? <Link to={'/dashboard'}> Dashboard </Link> : <Link to={'/signup'}> Signup </Link>}</Menu.Item>
    </Menu.Menu>
    <br/>
    <br/>
  </Menu>
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
  toggleLoggedIn: (userObject) => dispatch(toggleLoggedIn(userObject)), 
  setCurrentUser: (userObject) => dispatch(setCurrentUser(userObject))
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComp)