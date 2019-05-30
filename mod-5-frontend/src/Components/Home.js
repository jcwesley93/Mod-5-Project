import React from 'react';
import { connect } from 'react-redux'
import { Container, Header, Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


class Home extends React.Component {
    render(){
        return(
            <div>
              <Grid textAlign='center' style ={{height: '50vh'}} verticalAlign='middle'>
                <Grid.Column>
                <Header> Welcome to my app </Header>
                <Link to={'/products'}><Button>Products</Button></Link>
                <Link to={'/login'}><Button>Login</Button></Link>
                <Link to={'/signup'}><Button>Sign Up</Button></Link>
              </Grid.Column>
            </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { 
    info: state
  }
}

export default connect(mapStateToProps)(Home)