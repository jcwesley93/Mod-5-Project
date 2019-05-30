import React from 'react'

import { connect} from 'react-redux'
import { setSelectedShoppingList, setSelectedMakeupBag } from '../Redux/actions'
import {  Link } from 'react-router-dom'
import { Image, Grid, Header, Container, Label, List, Button } from 'semantic-ui-react'

//for styling, make sure you limit the size of the profile photo 

class Dashboard extends React.Component{

  handleSetSelectedShoppingList = (event, selectedShoppingList) => {
    event.preventDefault();
     this.props.dispatch(setSelectedShoppingList(selectedShoppingList));
     this.props.history.push('/shopping_list');
    }

    handleSetSelectedMakeupBag = (event, selectedMakeupBag) => {
      event.preventDefault(); 
      this.props.dispatch(setSelectedMakeupBag(selectedMakeupBag));
      this.props.history.push('/makeup_bag')
    }

    handleSendToNewSLForm = (event) => {
      event.preventDefault();
      this.props.history.push('/new_shopping_list')
    }
    
    handleSendToNewMBForm = (event) => {
      event.preventDefault(); 
      this.props.history.push('/new_makeup_bag')
    }

  render(){ 
    return( 
    <div>
    <div>
    <Grid columns={2} divided>
      <Grid.Column textAlign='center' width={6}>
      <Header size='huge'>{this.props.currentUser.name}</Header>
      <Image src={this.props.currentUser.avatar_image} size="medium" circular centered alt={this.props.currentUser.name} />
      <br/>
      <Container textAlign='center'><Header size='medium'>{this.props.currentUser.status}</Header> </Container>
      </Grid.Column>
      <Grid.Column>
      <Grid.Row>
        {/* this is for the profile info. An edit button is needed */}
      <Container>
        <Header size='large'>Profile Info</Header>
        <List divided selection> 
        <List.Item>
          <Label color='pink' horizontal>Username</Label> {this.props.currentUser.username} 
        </List.Item>
        <List.Item>
          <Label color='pink' horizontal>Email</Label> {this.props.currentUser.email}
        </List.Item>
        <List.Item> 
          <Label color='pink' horizontal>Fav. Beauty Brand</Label> {this.props.currentUser.favorite_beauty_brands}
        </List.Item>
        </List>
      </Container>
      </Grid.Row>
      <Grid.Row>
        <br/>
        <br/>
    <Container>
    <Grid columns={2}>
    <Grid.Column>
    <div> 
    <h2> Shopping Lists </h2>
    <Button color='pink' onClick={(event) => this.handleSendToNewSLForm(event)}> Add A Shopping List </Button>
      <List divided selection> 
      {/* the Link tag requires a 'to'. What is a better way to do this?  */}
        {this.props.shoppingLists ? 
        this.props.shoppingLists.map(list => <List.Item> <Link to="/shopping_list" onClick={(event) => this.handleSetSelectedShoppingList(event, list)}>{list.name}</Link> <br/> {list.description} </List.Item>): 
        <p> It looks like there are no shopping lists! Let's add one! </p>}
      </List>
      </div>
      </Grid.Column>
      <Grid.Column>
      <div> 
      <h2> Makeup Bags </h2>
      <Button color='pink' onClick={(event) => this.handleSendToNewMBForm(event)}> Add A Makeup Bag </Button>
      <List divided selection> 
        {this.props.makeupBags ? this.props.makeupBags.map(list => <List.Item> <Link to="/makeup_bag" onClick={(event) => this.handleSetSelectedMakeupBag(event, list)}>{list.name}</Link> <br/> {list.description} </List.Item>) : <p> It Looks like there are no shopping lists! Let's add one!</p>}
      </List>
    </div>
    </Grid.Column>
    </Grid>
    </Container>
    </Grid.Row>
    </Grid.Column>
    </Grid>
    </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    currentUser: state.currentUser, 
    makeupBags: state.makeupBags, 
    shoppingLists: state.shoppingLists
  }
}

export default connect(mapStateToProps)(Dashboard)
