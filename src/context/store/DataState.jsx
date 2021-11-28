import {useReducer} from 'react';
import {DataReducer} from './DataReducer';
import {DataContext} from './DataContext';
//faker data

const DataState = (props) => {

    // initial state cart 
    const initialState = {
        cart:[]
    }
    // reducer to manipulate state cart 
    const [state, dispatch] = useReducer(DataReducer,initialState)
    
    // dispatchs to manipulate state cart
    const addCart  = (prod) => {
        dispatch({
            type:'ADD_TO_CART',
            payload:prod
        })
    }
    const removeFromCart  = (id) => {
        dispatch({
            type:'REMOVE_FROM_CART',
            payload:id
        })

    }
    const addQty = (value,id)=>
    dispatch({
        type: "CHANGE_CART_QTY",
        payload: {
          id: id,
          qty:value,
        },
      })

    return(
        <DataContext.Provider value = {{
            cart:state.cart,
            addCart,
            removeFromCart,
            addQty
        }}>
           {props.children}
        </DataContext.Provider>
    )
    
    }
    
    export default DataState