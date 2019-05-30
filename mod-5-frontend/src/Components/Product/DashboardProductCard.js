import React from 'react'
import { Card, Image } from 'semantic-ui-react'

class DashboardProductCard extends React.Component{

  render(){

    let cardStyle = {
      margin:'15px'
    }

    return(<div>
      <Card style={cardStyle}>
    <Image src={this.props.image} alt={this.props.name} wrapped ui={false}/>
    <Card.Content>
    <Card.Header> {this.props.name} </Card.Header>
    <Card.Meta>{this.props.category}</Card.Meta>
    </Card.Content>
    </Card>
    </div>
    )
  }
}

export default DashboardProductCard
