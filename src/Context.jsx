import { useContext, useReducer, useEffect, createContext, Children} from 'react'
import reducer from './reducer';
import cartItems from './data';
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from './action';

const AppContext = createContext();

const initialState = {
    loading: false,
    cart: cartItems,
    totalItems: cartItems.reduce((acc, item) => acc + item.amount, 0),
    totalAmount: cartItems.reduce((acc, item) => acc + item.price * item.amount, 0)
};


export const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    return <AppContext.Provider value={{...state, dispatch}}>
    {children}
    </AppContext.Provider>    
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}