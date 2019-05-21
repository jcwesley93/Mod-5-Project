import React from 'react';
import { connect } from 'react-redux'

class Home extends React.Component {
    render(){
        return(
            <div>{this.props.info.name}</div>
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