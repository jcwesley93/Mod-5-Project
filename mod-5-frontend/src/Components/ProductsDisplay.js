import React from 'react'
import ProductCard from './ProductCard';

import { Columns } from 'react-bulma-components'

class ProductsDisplay extends React.Component{
  render(){
    if(this.props.category === "All"){
      return(<div>
        <Columns>
        {this.props.products.map(prod => 
           <div>
             <Columns.Column size="one-quarter">
             <ProductCard name={prod.name}
               image={prod.image}
               description={prod.description}/>
               <button value="makeupBag" onClick={() => this.props.handleAddToMakeupBag(prod, this.props.currentUser)}>Add To Makeup Bag</button>
             </Columns.Column>
          </div> 
        )}
        </Columns>
      </div>
      )
    } else{
      return(<div> 
        {this.props.products.filter(prod => prod.category === this.props.category).map(prod => <ProductCard name={prod.name}
        image={prod.image}
        description={prod.description}
        />)}
      </div>
      )
     }
    }
  }

 
export default ProductsDisplay

// if the category is all or an empty string, render all products. 
//else, render the products whose category matches productDisplayCategory. 