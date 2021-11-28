// react dependencies
import {useContext,useEffect,useState} from 'react'
//global state
import {DataContext} from '../context/store/DataContext.js'
//components
import {RatingComponent} from './RatingComponent.jsx';
//react icons
import {BiTrashAlt} from 'react-icons/bi';

export const CartComponent = () => {
    const {cart,removeFromCart,addQty} = useContext(DataContext);
    const [total, setTotal] = useState()
    useEffect(() => {
       setTotal(cart.reduce((acc,curr) => acc + Number(curr.price)* curr.qty, 0 ))
    }, [cart])
    return (
        <div className="sm:flex">
        <div className="flex flex-col w-full sm:w-9/12 sm:h-screen overflow-y-auto">
        {
            cart?.map( item => {
                return(
                    <div className="flex text-xs sm:text-xl items-center justify-around m-5 py-4
                        border-solid border-b-2" key={item.id} >
                        <img src={item.img} alt="img" className=" h-14 w-10 sm:h-24 w-24 scale-50"/>
                        <div className="px-3 w-full flex justify-between">
                            <div>
                                <p className="p-0.5 text-gray-700 truncate ">{item.name}</p>
                                <p className="p-0.5 text-gray-500"> $ {item.price}</p>
                            </div> 
                            <div>  
                                <div className="flex py-1 text-black">
                                    <RatingComponent rate={item.raitings}/>
                                </div>
                                <div className="flex justify-between items-center">
                                    <BiTrashAlt className="text-xl" onClick={()=>{removeFromCart(item.id)}}/>
                                    <select value={item.qty} onChange={(e)=>{addQty(e.target.value, item.id)}}>
                                            {[...Array(item.inStock).keys()].map((x) => (
                                                <option key={x + 1}>{x + 1}</option>
                                            ))}
                                    </select>
                                </div>
                            </div> 
                        </div>
                    </div>
                    
                )})
            }
        </div>
            <div className="p-2 sm:p-0">
                <p className="text-3xl pb-3 ">Sub total ({cart.length}) {cart.length>1?"items":"item"}</p>
                <p className="text-lg py-4">total ${total}</p>
                <button  className="w-full p-4 sm:p-2 bg-black text-white rounded-sm" >
                    Buy
                </button>
            </div>
        </div>
    )
}
