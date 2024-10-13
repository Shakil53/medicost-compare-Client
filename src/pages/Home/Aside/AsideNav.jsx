import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "../Header/Navbar";


const AsideNav = () => {
    return (
        <>
       <Navbar></Navbar>
        <div className='grid grid-cols-12'>
            <Sidebar></Sidebar>
                <div className='col-span-10 h-[200vh]'>
                    <Outlet></Outlet>
                </div>

          </div>
          </>
    );
};

export default AsideNav;