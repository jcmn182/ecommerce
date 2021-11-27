// react dependencies
import {useContext,useEffect,useState} from 'react'
//global state
import {DataContext} from '../context/store/DataContext.js'
//components
import {RatingComponent} from './RatingComponent.jsx';
//react icons
import {BiTrashAlt} from 'react-icons/bi';

export const CartComponent = () => {
    const {cart,removeFromCart} = useContext(DataContext);
    const [total, setTotal] = useState()
    useEffect(() => {
       setTotal(cart.reduce((acc,curr) => acc + Number(curr.price),0 ))
    }, [cart])
    return (
        <div className="h-screen overflow-y-auto flex">
        <div className="flex flex-col w-9/12">
        {
            cart?.map( item => {
                return(
                    <div className="flex text-xl items-center justify-around p-5
                    border-solid border-b-2" key={item.id} >
                        <div className="flex justify-around w-full">    
                                <img src={item.img} alt="img" className="h-24 w-24 scale-50"/>
                            <div className="px-3 w-full">
                                <p className="p-0.5 text-gray-700 truncate w-full">{item.name}</p>
                                <p className="p-0.5 text-gray-500"> $ {item.price}</p>
                                <div className="flex py-1 text-black">
                                <RatingComponent rate={item.raitings}/>
                                </div>
                                <BiTrashAlt className="text-xl" onClick={()=>{removeFromCart(item.id)}}/>
                            </div>
                        </div>
                    </div>
                )})
            }
        </div>
            <div className="">
                <p>Sub total ({cart.length}) {cart.length>1?"items":"item"}</p>
                <p>total {total}</p>
            </div>
        </div>
    )
}
