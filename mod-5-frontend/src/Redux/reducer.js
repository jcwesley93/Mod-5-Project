const initialState = {
 currentUser: {},
 makeupBags: [], 
 shoppingLists: [],
 selectedShoppingList:{}, 
 selectedMakeupBag: {},
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

      case('SET_MAKEUP_BAGS'):{
        return{...state, makeupBags: action.payload}
      }

      case('SET_SHOPPING_LISTS'):{
        return{...state, shoppingLists: action.payload}
      }

      case('SET_SELECTED_SHOPPING_LIST'):{
        return{...state, selectedShoppingList: action.payload}
      }

      case('SET_SELECTED_MAKEUP_BAG'):{
        return{...state, selectedMakeupBag: action.payload}
      }

      case('UPDATE_SHOPPING_LISTS'):{
        return{...state,
           shoppingLists: state.shoppingLists.concat(action.payload)}
      }

      case('UPDATE_MAKEUP_BAGS'): {
        return{...state, 
        makeupBags: state.makeupBags.concat(action.payload)}
      }

      case('REMOVE_SHOPPING_LIST'):{
        return{...state,
        shoppingLists: state.shoppingLists.filter(list => {
          console.log(list !== action.payload)
          console.log(list, action.payload)
          return list.id !== action.payload.id
        }
      )}
      }

      default:
          return state
    }
}

export default reducer