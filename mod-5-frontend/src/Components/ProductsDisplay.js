import React from 'react'
import ProductCard from './ProductCard';

class ProductsDisplay extends React.Component{
  render(){
    if(this.props.category === "All"){
      return(<div> 
        {this.props.products.map(prod => 
          <ProductCard name={prod.name}/>)}
      </div>
      )
    } else{
      return(<div> 
        {this.props.products.filter(prod => prod.category === this.props.category).map(prod => <ProductCard name={prod.name}/>)}
      </div>
      )
     }
    }
  }

 
export default ProductsDisplay

// if the category is all or an empty string, render all products. 
//else, render the products whose category matches productDisplayCategory. 