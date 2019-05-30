import React from 'react'

import { connect} from 'react-redux'
import { setSelectedShoppingList, setSelectedMakeupBag } from '../Redux/actions'
import {  Link } from 'react-router-dom'



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
      <h1>{this.props.currentUser.name}</h1>
      <img src={this.props.currentUser.avatar_image} alt={this.props.currentUser.name} />
      <h3>{this.props.currentUser.status} </h3>
      <div> 
        <p>{this.props.currentUser.email} </p>
      </div>
    <div> 
    <h2> Shopping Lists </h2>
    <button onClick={(event) => this.handleSendToNewSLForm(event)}> Add A Shopping List </button>
      <ul> 
      {/* the Link tag requires a 'to'. What is a better way to do this?  */}
        {this.props.shoppingLists ? 
        this.props.shoppingLists.map(list => <li> <Link to="/shopping_list" onClick={(event) => this.handleSetSelectedShoppingList(event, list)}>{list.name}</Link> <br/> {list.description} </li>): 
        <p> It looks like there are no shopping lists! Let's add one! </p>}
      </ul>
      </div>
      <div> 
      <h2> Makeup Bags </h2>
      <button onClick={(event) => this.handleSendToNewMBForm(event)}> Add A Makeup Bag </button>
      <ul> 
        {this.props.makeupBags ? this.props.makeupBags.map(list => <li> <Link to="/makeup_bag" onClick={(event) => this.handleSetSelectedMakeupBag(event, list)}>{list.name}</Link> <br/> {list.description} </li>) : <p> It Looks like there are no shopping lists! Let's add one!</p>}
      </ul>
    </div>
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
