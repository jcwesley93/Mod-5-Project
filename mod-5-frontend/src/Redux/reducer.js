const initialState = {
 currentUser: {},
 products: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

      case('FETCH_PRODUCT_DATA'): {
        return{...state, products: action.payload}
      }

      case('SET_CURRENT_USER'):{
        return{...state, currentUser: action.payload}
      }

      default:
          return state
    }
}

export default reducer