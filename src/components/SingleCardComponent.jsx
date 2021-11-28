//components
import {RatingComponent} from './RatingComponent.jsx';
// react dependencies
import {useContext} from 'react'
//global state
import {DataContext} from '../context/store/DataContext.js'
import {SearchContext} from '../context/search/SearchContext'
//react-icons

export const SingleCardComponent = () => {
    const {addCart,cart,removeFromCart} = useContext(DataContext);
    const {products,byFastDelivery,sort,byStock, byRating} = useContext(SearchContext)
    const filterProducts = () =>{
        let productsFilter = products
        if (sort){
            productsFilter = productsFilter.sort((a,b)=>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            )
        }

        if (!byStock) {
            productsFilter = productsFilter.filter((prod) => prod.inStock);
          }

        if (byFastDelivery){
            productsFilter = productsFilter.filter((item)=> item.fastDelivery)
        }

        if (byRating) {
            productsFilter = productsFilter.filter(
              (prod) => prod.raitings === byRating
            );
          }

        return productsFilter
    }
    console.log(cart)

    return (
        <>
            {
              filterProducts()?
               (filterProducts().map( item => {
                    return (
                       <div  className=" sans p-10 sm:p-3" key={item.id}>
                           <img src={item.img} alt="img"/>
                            <p className="py-1 text-gray-700">{item.name}</p>
                            <p className="py-1 text-gray-500"> $ {item.price}</p>
                            {
                            item.fastDelivery?<p className="py-1 text-gray-500">Fast Delivery</p>
                            :<p className="py-1 text-gray-500">2 Days Delivery</p>
                            }
                            <div className="flex py-1 text-black">
                                <RatingComponent rate={item.raitings}/>
                            </div>
                            {cart.some((product)=>product.id===item.id)?(
                                <button className="w-full p-1 bg-white text-black 
                                rounded-sm border-solid border border-black"
                                onClick={()=>{removeFromCart(item.id)}}
                                 >Remove</button> 
                            ):(
                            <button  disabled={!item.inStock} onClick={()=>{addCart(item)}}
                            className={`${!item.inStock?"bg-gray-800":null} w-full p-1 bg-black text-white rounded-sm`} >
                                    {!item.inStock?"There isn't products":"Add"}</button> 
                            )}   
                       </div>
                    )
                })): <p>loading...</p>
             }  
        </>
    )
}
