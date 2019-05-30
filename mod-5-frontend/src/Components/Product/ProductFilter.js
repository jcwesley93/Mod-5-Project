import React from 'react'

import { Button, Grid } from 'semantic-ui-react'

class ProductFilter extends React.Component{

  //toggle when active. This will have to update the onClick method that is passed down. 
  
  render(){
    return(<div>
      <Grid textAlign='center'>
      <Button.Group>
      <Button value="All" onClick={(event) => this.props.handleCategoryChange(event)}> All</Button>
      <Button.Or/>
      <Button value="Face" onClick={(event) => this.props.handleCategoryChange(event)}> Face</Button>
      <Button.Or/>
      <Button value="Eye" onClick={(event) => this.props.handleCategoryChange(event)}> Eye </Button>
      <Button.Or/>
      <Button value="Lip" onClick={(event) => this.props.handleCategoryChange(event)}> Lip</Button>
      <Button.Or/>
      <Button value="Cheek" onClick={(event) => this.props.handleCategoryChange(event)}> Cheek</Button>
      </Button.Group>
      </Grid>
    </div>
    )
  }
}

export default ProductFilter