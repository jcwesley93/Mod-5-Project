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
               description={prod.description}/>
               <button value="makeupBag" onClick={() => this.props.handleAddToMakeupBag(prod, this.props.currentUser)}>Add To Makeup Bag</button>
             <button value="shoppingList" onClick={() => this.props.handleAddToShoppingList(prod, this.props.currentUser)}>Add To Shopping List</button>
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
          description={prod.description} />
          <button value="makeupBag" onClick={() => this.props.handleAddToMakeupBag(prod, this.props.currentUser)}>Add To Makeup Bag</button>
        </div>)}
      </div>
      )
     }
    }
  }

 
export default ProductsDisplay

// if the category is all or an empty string, render all products. 
//else, render the products whose category matches productDisplayCategory. 