import React from 'react';
import { connect } from 'react-redux'
import { Container, Header, Grid, Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


class Home extends React.Component {
    render(){
        return(
            <div>
              <Grid textAlign='center' style ={{height: '50vh'}} verticalAlign='middle'>
                <Grid.Column width={6}>
                <Container>
                <Header size='huge' color='pink'> Welcome </Header>
                </Container>
                <Container>
                  <iframe src="https://giphy.com/embed/ZjsCVZX5l1K1y" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </Container>
                <Message> <p>[Title TBD] is your next favorite beauty app. Index all of your beauty products (even that lipstick under your car seat) in your virtual makeup bags. When it is time to re-up, just make a quick shopping list to keep you (kinda) focused in Sephora.</p>
                  <Header size='medium'> Slay Queen 👑💄 </Header>
                </Message>
                <Container>
                  <Link to={'/products'}><Button>Products</Button></Link>
                  <Link to={'/login'}><Button>Login</Button></Link>
                  <Link to={'/signup'}><Button>Sign Up</Button></Link>
                </Container>
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