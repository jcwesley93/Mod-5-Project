import React from 'react'

import { connect } from 'react-redux'

class Dashboard extends React.Component{

  render(){ 
    return(<div> 
      <h1>{this.props.currentUser.name}</h1>
      <img src={this.props.currentUser.avatar_img} alt={this.props.currentUser.name} />
      <h3>{this.props.currentUser.status} </h3>
      <div> 
        <p>{this.props.currentUser.email} </p>
        <p>{this.props.currentUser.address}, {this.props.currentUser.city}, {this.props.currentUser.state} {this.props.currentUser.zipcode}</p>
      </div>
      <div> 
      <h2> Shopping Lists </h2>
      <ul> 
        {this.props.currentUser.shopping_lists ? this.props.currentUser.shopping_lists.map(list => <li>{list.name} <br/> {list.description} </li>) : <p> Add a Shopping List </p>}
      </ul>
      </div>
      <div> 
      <h2> Makeup Bags </h2>
      <ul> 
        {this.props.currentUser.makeup_bags ? this.props.currentUser.makeup_bags.map(list => <li>{list.name} <br/> {list.description} </li>) : <p> Add a Makeup Bag </p>}
      </ul>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Dashboard)