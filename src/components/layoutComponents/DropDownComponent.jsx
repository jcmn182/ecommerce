// react router dependencies
import { Link} from "react-router-dom";
// react dependencies
import {useContext} from 'react'
//global state
import {DataContext} from '../../context/store/DataContext.js'
//react icons
import {BiTrashAlt} from 'react-icons/bi';
export const DropDownComponent = () => {
    const {cart,removeFromCart} = useContext(DataContext);
    return (
            <div className="dropdown-content">
        <div className="h-56 overflow-y-auto">
            {cart.length>0?(
                cart.map(item=>{
                    return(
                    <div className="flex text-xs items-center justify-around w-full" key={item.id} >
                        <div className="flex items-center justify-around w-full">    
                                <img src={item.img} alt="img" className="rounded-full h-8 w-8 scale-50"/>
                            <div className="py-2 px-3 w-full">
                                <p className="p-0.5 text-gray-700 truncate w-full">{item.name}</p>
                                <p className="p-0.5 text-gray-500"> $ {item.price}</p>
                            </div>
                        </div>
                        <BiTrashAlt className="text-xl" onClick={()=>{removeFromCart(item.id)}}/>
                    </div>
                )})
            ):(<p className="text-lg">Empty cart!</p>)}
        </div>
            {    cart.length>>0?   
                <Link to="/cart" ><button  className={"w-full p-0.5 bg-black text-white rounded-sm"} >
                    Buy
                </button>
                </Link>:null
                    }
        </div>
    )
}
