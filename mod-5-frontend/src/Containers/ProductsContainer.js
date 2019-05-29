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

  
  handleAddToMakeupBag = (selectedProduct, currentUser) => {
    let selectedMakeupBag = currentUser.makeup_bags[0].id
    fetch("http://localhost:3005/api/v1/makeup_bag_products",{
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      body: JSON.stringify({
          makeup_bag_id: selectedMakeupBag, 
          product_id: selectedProduct.id
      })
    })
    .then(res => res.json())
    .then(res => console.log(res))
     //This should add it to the correct makeup bag in the state.
  }
  

  //This is not recoginizing the shopping bag id. 
  handleAddToShoppingList = (selectedProduct, currentUser) => {
    debugger
    let selectedShoppingList = currentUser.shopping_lists[0].id

    console.log(selectedProduct, selectedShoppingList)
    fetch("http://localhost:3005/api/v1/shopping_list_products",{
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      body: JSON.stringify({
          makeup_bag_id: 1, 
          product_id: selectedProduct.id
      })
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }
  
  render(){
    return(<div>
      <ProductFilter handleCategoryChange={this.handleCategoryChange} />
      <ProductsDisplay category={this.state.productDisplayCategory}
       products={this.props.products} 
       handleAddToMakeupBag={this.handleAddToMakeupBag} 
       handleAddToShoppingList={this.handleAddToShoppingList}
       currentUser={this.props.currentUser} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    products: state.products, 
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchProductData: (productsObject) => dispatch(fetchProductData(productsObject))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)