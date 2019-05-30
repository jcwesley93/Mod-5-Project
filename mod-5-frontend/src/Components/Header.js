import React from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'semantic-ui-react'

class Header extends React.Component{
  render(){
    return(<div> 
  <h1> Mod 5 Project </h1>
  <Menu pointing secondary>
    <Menu.Item><Link to={'/home'}> Home </Link></Menu.Item>
    <Menu.Item><Link to={'/products'}> Products </Link></Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item><Link to={'/login'}> Login </Link></Menu.Item>
      <Menu.Item><Link to={'/dashboard'}> Dashboard </Link></Menu.Item>
      <Menu.Item><Link to={'/signup'}> Signup </Link></Menu.Item>
    </Menu.Menu>
    <br/>
    <br/>
  </Menu>
  </div>
    )
  }
}

export default Header