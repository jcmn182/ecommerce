import { Link} from "react-router-dom";
import { BsBag,BsHeart} from 'react-icons/bs';
import { AiFillZhihuSquare } from 'react-icons/ai';

export const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full p-6 text-2xl sm:p-8">
            <Link to="/"><AiFillZhihuSquare/></Link>
            <div className="flex justify-around ">
                <Link to="/favorites" className="pr-8"><BsHeart/></Link>
                <Link to="/cart" className=""><BsBag/></Link>
            </div>    
        </div>
    )
}
