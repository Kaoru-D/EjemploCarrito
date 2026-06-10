import { useContext, useReducer, useEffect, createContext, Children} from 'react'
import reducer from './reducer';
import cartItems from './data';
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from './action';

const AppContext = createContext();

const initialState = {
    loading: false,
    cart: new Map(cartItems.map((item) => [item.id, item])),
    totalItems: cartItems.reduce((acc, item) => acc + item.amount, 0),
    totalAmount: cartItems.reduce((acc, item) => acc + item.price * item.amount, 0)
};


export const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const clearCart = ()=>{
        dispatch({type: CLEAR_CART})
    }

    const removeItem = (id)=>{
        dispatch({type: REMOVE, payload: {id}})
    }


    return <AppContext.Provider value={{...state, clearCart, removeItem}}>
    {children}
    </AppContext.Provider>    
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}