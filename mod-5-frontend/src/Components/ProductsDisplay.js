import React from 'react'
import ProductCard from './ProductCard';

class ProductsDisplay extends React.Component{


  render(){
    if(this.props.category === "All"){
      return(<div>
        {this.props.products.map(prod => 
           <div>
             <ProductCard name={prod.name}
               image={prod.image}
               description={prod.description}
               id={prod.id}/>
          </div> 
        )}
      </div>
      )
    } else{
      return(<div> 
        {this.props.products.filter(prod => prod.category === this.props.category).map(prod =>
        <div> 
          <ProductCard name={prod.name}
          image={prod.image}
          description={prod.description}
          id={prod.id} />
        </div>)}
      </div>
      )
     }
    }
  }

 
export default ProductsDisplay

//on click, conditionally show the select menu and an add button. 
//on add, send the post request to create a new instance in the join table 
//this should also update the selected list by adding the product
