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
        const itemID = action.payload.id;
        newCart.delete(itemID);
        return {...state, cart: newCart, totalItems: Array.from(newCart.values()).reduce((acc, item) => acc + item.amount, 0), totalAmount: Array.from(newCart.values()).reduce((acc, item) => acc + item.price * item.amount, 0)}
    }
    if(action.type === INCREASE){
        const newCart = new Map(state.cart);
        const itemID = action.payload.id;
        const item = newCart.get(itemID);
        const newItem = {...item, amount: item.amount + 1};
        newCart.set(itemID, newItem);
        return {...state, cart: newCart, totalItems: Array.from(newCart.values()).reduce((acc, item) => acc + item.amount, 0), totalAmount: Array.from(newCart.values()).reduce((acc, item) => acc + item.price * item.amount, 0)}
    }
    if(action.type === DECREASE){
        const newCart = new Map(state.cart);
        const itemID = action.payload.id;
        const item = newCart.get(itemID);
        if(item.amount === 1){
            newCart.delete(itemID);
            return {...state, cart: newCart, totalItems: Array.from(newCart.values()).reduce((acc, item) => acc + item.amount, 0), totalAmount: Array.from(newCart.values()).reduce((acc, item) => acc + item.price * item.amount, 0)}
        }
        const newItem = {...item, amount: item.amount - 1};
        newCart.set(itemID, newItem);
        return {...state, cart: newCart, totalItems: Array.from(newCart.values()).reduce((acc, item) => acc + item.amount, 0), totalAmount: Array.from(newCart.values()).reduce((acc, item) => acc + item.price * item.amount, 0)}
    }
    throw new Error(`No es una acción válida: ${action.type}`);
};

export default reducer;