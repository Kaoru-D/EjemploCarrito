import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEMS,
  } from './action';
const reducer = (state, action) =>{
    if(action.type === CLEAR_CART){
        return {...state, cart: new Map(), totalItems: 0, totalAmount: 0}
    }
    throw new Error(`No es una acción válida: ${action.type}`);
};

export default reducer;