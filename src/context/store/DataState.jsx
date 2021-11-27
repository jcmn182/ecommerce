import {useReducer} from 'react';
import {DataReducer} from './DataReducer';
import {DataContext} from './DataContext';
//faker data
import faker from 'faker';
const DataState = (props) => {

    const products = [...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:faker.random.image(),
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
}))

    const initialState = {
        products:products,
        cart:[]
    }
    
    const [state, dispatch] = useReducer(DataReducer,initialState)
    
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
/*
    const getItems  = async (category) =>{
        try{
            dispatch({
                type:"CLEAN"
            }
            )
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)//.then((status)=>console.log(status))
        const result =  await response.json();
        dispatch({
            type:'GET_ITEMS',
            payload:result,
        })
    }
    catch(err) {
            alert(err); // TypeError: failed to fetch
            console.log(err)
          }
    }*/
  
    
    return(
        <DataContext.Provider value = {{
            products:state.products,
            cart:state.cart,
            addCart,
            removeFromCart
        }}>
           {props.children}
        </DataContext.Provider>
    )
    
    }
    
    export default DataState