import React from 'react'
import ProductCard from "../Components/ProductCard"
import ProductFilter from "../Components/ProductFilter"
import ProductsDisplay from "../Components/ProductsDisplay"


class ProductsContainer extends React.Component{

  state={
    products: [], 
    productDisplayCategory: "All"
  }

  componentDidMount(){
    fetch("http://localhost:3005/api/v1/products").then(res => res.json())
    .then(prodObject => {
      this.setState({
        products: prodObject
      })
    })
  }

  handleCategoryChange = (event) => {
    this.setState({
      productDisplayCategory: event.target.value
    })
    console.log(this.state.productDisplayCategory)
  }
  
  render(){
    return(<div>
      <ProductCard />
      <ProductFilter handleCategoryChange={this.handleCategoryChange} />
      <ProductsDisplay category={this.state.productDisplayCategory} products={this.state.products} />
      </div>
    )
  }
}



export default ProductsContainer