import React from 'react'



class ProductCard extends React.Component{
  render(){
  return(<div> 
    <p>{this.props.name}</p>
    <img src={this.props.image} alt={this.props.name}/>
    <p>{this.props.description}</p>
    {/* <button value="makeupBag" onClick={() => console.log('i give up')}>Add To Makeup Bag</button> */}
    {/* <button value="shoppingList" onClick={(event) => console.log("this should send a post req. to create a new instances of the join table", this.props, event.target.value)}>Add To Shopping List</button> */}
  </div>
  )
  }
}

export default ProductCard