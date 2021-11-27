import {ADD_TO_CART,REMOVE_FROM_CART,CLEAN/*CHANGE_CART_QTY*/} from './types.js'

export const DataReducer = (state,action) => {
    const {payload,type} = action
    switch(type){
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };

        case REMOVE_FROM_CART:
            return {
                  ...state,
                  cart: state.cart.filter((item) => item.id !== payload),
                };
/*?*case CHANGE_CART_QTY:
            return {
                  ...state,
                  cart: state.cart.filter((c) =>
                    c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
                  ),
                };*/

        case CLEAN :
            return {
                ...state,
                categorys:[]
            }

        default : return state
    }
}
