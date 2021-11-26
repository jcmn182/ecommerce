//router
import { Outlet } from "react-router-dom";
//components
import {Navbar} from './Navbar.jsx';

export const MainLayOut = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    )
}
