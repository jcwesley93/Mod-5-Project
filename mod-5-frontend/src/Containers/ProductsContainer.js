import React from 'react'
import ProductCard from "../Components/ProductCard"
import ProductFilter from "../Components/ProductFilter"
import ProductsDisplay from "../Components/ProductsDisplay"

import { connect } from 'react-redux'
import { fetchProductData } from '../Redux/actions'


class ProductsContainer extends React.Component{

  state={
    productDisplayCategory: "All"
  }

  componentDidMount(){
    fetch("http://localhost:3005/api/v1/products")
    .then(res => res.json())
    .then(productsObject => this.props.fetchProductData(productsObject))
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
      <ProductsDisplay category={this.state.productDisplayCategory} products={this.props.products} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchProductData: (productsObject) => dispatch(fetchProductData(productsObject))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)