import {useReducer} from 'react';
import {SearchReducer} from './SearchReducer.js'
import {SearchContext} from './SearchContext.js';
//faker data
import faker from 'faker';

const SearchState = (props) => {
    //fake data base made with faker
    const products = [...Array(20)].map(()=>({
            id:faker.datatype.uuid(),
            name:faker.commerce.productName(),
            price:faker.commerce.price(),
            img:faker.random.image(),
            inStock:faker.random.arrayElement([0,3,5,6,7]),
            fastDelivery:faker.datatype.boolean(),
            raitings:faker.random.arrayElement([1,2,3,4,5])
    }))
    // initial state products 
    const initialState = {
        products:products,
        byStock: false,
        sort:"",
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    }
    // reducer to manipulate state cart 
    const [state, dispatch] = useReducer(SearchReducer,initialState);
    // dispatchs to manipulate state products
    const SearchSortLowToHigh = () => {
        dispatch({
            type: "SORT_BY_PRICE",
            payload: "lowToHigh",
          })
    }

    const SearchSortHightoLow = () => {
        dispatch({
            type: "SORT_BY_PRICE",
            payload: "HighToLow",
          })
    }

    const searchByRating = (i) => {
        dispatch({
            type: "FILTER_BY_RATING",
            payload:i,
          })
    }

    const SearchbyStock = () =>{
        dispatch({
            type: "FILTER_BY_STOCK",
          })
    }

    const SearchbyFastDelivery = () => {
        dispatch({
            type: "FILTER_BY_DELIVERY",
          })
    }

    const clearFilter = (e) => {
        e.preventDefault()
        dispatch({
            type: "CLEAR_FILTERS",
          })
    }

    return(
        <SearchContext.Provider value = {{
            products:state.products,
            sort:state.sort,
            byStock:state.byStock,
            byFastDelivery:state.byFastDelivery,
            byRating:state.byRating,
            searchQuery:state.searchQuery,
            SearchSortLowToHigh,
            SearchSortHightoLow,
            searchByRating,
            SearchbyStock,
            SearchbyFastDelivery,
            clearFilter
        }}>
           {props.children}
        </SearchContext.Provider>
    )
    
    }
    
    export default SearchState