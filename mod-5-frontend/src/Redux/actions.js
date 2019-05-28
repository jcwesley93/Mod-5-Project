export const fetchProductData = (productsObect) => ({type: 'FETCH_PRODUCT_DATA', payload: productsObect})

export const setCurrentUser = (userObject) => ({type: 'SET_CURRENT_USER', payload: userObject})

export const setMakeupBags = (userMakeupBagObject) => ({type: 'SET_MAKEUP_BAGS', payload: userMakeupBagObject})

export const setShoppingLists = (userShoppingListObject) => ({type: 'SET_SHOPPING_LISTS', payload: userShoppingListObject})

export const setSelectedShoppingList = (selectedShoppingList) => ({type: 'SET_SELECTED_SHOPPING_LIST', payload: selectedShoppingList})

export const setSelectedMakeupBag = (selectedMakeupBag) => ({type: 'SET_SELECTED_MAKEUP_BAG', payload: selectedMakeupBag})

export const updateShoppingLists = (newShoppingList) => ({type: 'UPDATE_SHOPPING_LISTS', payload: newShoppingList})