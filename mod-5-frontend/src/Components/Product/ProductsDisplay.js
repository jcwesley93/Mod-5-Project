import React from 'react'
import ProductCard from './ProductCard';
import { Grid } from 'semantic-ui-react'

class ProductsDisplay extends React.Component{


  render(){
    if(this.props.category === "All"){
      return(<div>
        <Grid relaxed>
        {this.props.products.map(prod => 
           <div>
               <ProductCard name={prod.name}
               image={prod.image}
               description={prod.description}
               id={prod.id}
               category={prod.category}
               brand={prod.brand}
               sold_at={prod.sold_at}
               price={prod.price}/>
          </div> 
        )}
        </Grid>
      </div>
      )
    } else{
      return(<div> 
        <Grid relaxed>
        {this.props.products.filter(prod => prod.category === this.props.category).map(prod =>
        <div> 
          <ProductCard name={prod.name}
          image={prod.image}
          description={prod.description}
          id={prod.id}
          category={prod.category}
          brand={prod.brand}
          sold_at={prod.sold_at}
          price={prod.price} />
        </div>)}
        </Grid>
      </div>
      )
     }
    }
  }

 
export default ProductsDisplay

//on click, conditionally show the select menu and an add button. 
//on add, send the post request to create a new instance in the join table 
//this should also update the selected list by adding the product
