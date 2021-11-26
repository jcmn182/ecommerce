import {useReducer} from 'react';
import {DataReducer} from './DataReducer';
import {DataContext} from './DataContext';

const DataState = (props) => {


    const initialState = {
        products:[],
        categorys:[]
    }
    
    const [state, dispatch] = useReducer(DataReducer,initialState)
    
    const getData  = async () =>{
        try{
        const response = await fetch('https://fakestoreapi.com/products/categories',)//.then((status)=>console.log(status))
        const result = await response.json();
        dispatch({
            type:'GET_DATA',
            payload:result,
        })

        }
        catch(err) {
            alert(err);
            console.log(err) // TypeError: failed to fetch
          }
      
    }

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
    }
  
    
    return(
        <DataContext.Provider value = {{
            products:state.products,
            categorys:state.categorys,
            getData,
            getItems
        }}>
           {props.children}
        </DataContext.Provider>
    )
    
    }
    
    export default DataState