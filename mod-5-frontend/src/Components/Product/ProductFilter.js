import React from 'react'

class ProductFilter extends React.Component{
  render(){
    return(<div> 
      <button value="All" onClick={(event) => this.props.handleCategoryChange(event)}> All</button>
      <button value="Face" onClick={(event) => this.props.handleCategoryChange(event)}> Face</button>
      <button value="Eye" onClick={(event) => this.props.handleCategoryChange(event)}> Eye </button>
      <button value="Lip" onClick={(event) => this.props.handleCategoryChange(event)}> Lip</button>
      <button value="Cheek" onClick={(event) => this.props.handleCategoryChange(event)}> Cheek</button>
    </div>
    )
  }
}

export default ProductFilter