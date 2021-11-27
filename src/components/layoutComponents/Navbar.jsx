// react router dependencies
import { Link} from "react-router-dom";
// icons
import { BsBag,BsHeart} from 'react-icons/bs';
import { AiFillZhihuSquare } from 'react-icons/ai';
// react dependencies
import {useContext} from 'react'
//global state
import {DataContext} from '../../context/store/DataContext.js'
//components
import {DropDownComponent} from './DropDownComponent.jsx';

export const Navbar = () => {
    const {cart} = useContext(DataContext);
    return (
        <div className="flex justify-between items-center w-full p-6 text-2xl sm:p-8">
            <Link to="/"><AiFillZhihuSquare/></Link>
            <div className="flex justify-around">
                <Link to="/favorites" className="pr-8"><BsHeart/></Link>
                <div className="dropdown">
                    <Link to="/cart" className="relative">
                        <p className="absolute text-xs top-2 left-2">{cart.length>0?cart.length:" "}</p><BsBag/></Link>
                    <DropDownComponent/>
                </div>
            </div>    
        </div>
    )
}

