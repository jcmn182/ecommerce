import {GET_DATA,GET_ITEMS,CLEAN} from './types.js'

export const DataReducer = (state,action) => {
    const {payload,type} = action
    switch(type){
    case GET_DATA :
        return {
            ...state,
            products:payload
        }

        case GET_ITEMS :
        return {
            ...state,
            categorys:payload
        }

        case CLEAN :
        return {
            ...state,
            categorys:[]
        }

        default : return state
    }
}
