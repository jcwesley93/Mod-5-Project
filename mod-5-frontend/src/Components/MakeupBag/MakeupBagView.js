import React from 'react'

import { connect } from 'react-redux'
import { setSelectedMakeupBag } from "../../Redux/actions"
import ProductCard from '../ProductCard';

class MakeupBagView extends React.Component {

  componentDidMount(){
    console.log(this.props.selectedList.id)
    fetch(`http://localhost:3005/api/v1/makeup_bags/${this.props.selectedList.id}`)
    .then(res => res.json())
    .then(res => this.props.dispatch(setSelectedMakeupBag(res)))
  }


  render(){
    return( <div>
      <h1> {this.props.selectedList.name} </h1> 
      <br/>
      <br/>
      {this.props.selectedList.products ? 
      this.props.selectedList.products.map(list => <ProductCard name={list.name} image={list.image}/>) : <p> There are no products on this list! </p>}
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    selectedList: state.selectedMakeupBag
  }
}

export default connect(mapStateToProps)(MakeupBagView)