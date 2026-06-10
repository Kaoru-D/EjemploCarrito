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
    if(action.type === REMOVE){
        const newCart = new Map(state.cart);
        newCart.delete(action.payload.id);
        return {...state, cart: newCart, totalItems: Array.from(newCart.values()).reduce((acc, item) => acc + item.amount, 0), totalAmount: Array.from(newCart.values()).reduce((acc, item) => acc + item.price * item.amount, 0)}
    }
    throw new Error(`No es una acción válida: ${action.type}`);
};

export default reducer;