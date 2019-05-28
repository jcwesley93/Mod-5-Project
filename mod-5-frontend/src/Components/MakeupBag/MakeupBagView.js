import React from 'react'

import EditMakeupBagForm from "./EditMakeupBagForm"

import { connect } from 'react-redux'
import { setSelectedMakeupBag, removeMakeupBag} from "../../Redux/actions"
import ProductCard from '../ProductCard';

class MakeupBagView extends React.Component {

  componentDidMount(){
    fetch(`http://localhost:3005/api/v1/makeup_bags/${this.props.selectedList.id}`)
    .then(res => res.json())
    .then(res => this.props.setSelectedMakeupBag(res))
  }

  handleDelete = (event) => {
    event.preventDefault(); 
    fetch(`http://localhost:3005/api/v1/makeup_bags/${this.props.selectedList.id}`, {
      method: 'DELETE', 
      headers:{
        'Content-Type': 'application/json', 
        'Accepts': 'application/json'
      }
    })
    .then(res => res.json())
    .then(this.props.removeMakeupBag(this.props.selectedList))
    this.props.history.push('/dashboard')
  } 




  render(){
    return( <div>
      <h1> {this.props.selectedList.name} </h1> 
      <h4> {this.props.selectedList.description}</h4>
      <EditMakeupBagForm/>
      <button onClick={this.handleDelete}> Delete Makeup Bag</button>
      <br/>
      <br/>
      {this.props.selectedList.products && this.props.selectedList.products.length > 0 ? 
      this.props.selectedList.products.map(list => <ProductCard name={list.name} image={list.image}/>) : <p> There are no products in this bag! </p>}
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    selectedList: state.selectedMakeupBag
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setSelectedMakeupBag: (selectedList) => dispatch(setSelectedMakeupBag(selectedList)), 
    removeMakeupBag: (selectedList) => dispatch(removeMakeupBag(selectedList))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeupBagView)