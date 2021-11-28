import {SORT_BY_PRICE,FILTER_BY_STOCK,FILTER_BY_DELIVERY,FILTER_BY_RATING,
    FILTER_BY_SEARCH,CLEAR_FILTERS} from './types.js'

export const SearchReducer = (state, action) => {
    const {payload,type} = action
    switch (type) {
      case SORT_BY_PRICE:
        return { ...state, sort: payload };
      case FILTER_BY_STOCK:
        return { ...state, byStock: !state.byStock };
      case FILTER_BY_DELIVERY:
        return { ...state, byFastDelivery: !state.byFastDelivery };
      case FILTER_BY_RATING:
        return { ...state, byRating: payload };
      case FILTER_BY_SEARCH:
        return { ...state, searchQuery: payload };
      case CLEAR_FILTERS:
        return { 
          ...state,
          sort:"",
          byStock: false,
          byFastDelivery: false,
          byRating: 0,
          searchQuery: "",
         };
      default:
        return state;
    }
  };