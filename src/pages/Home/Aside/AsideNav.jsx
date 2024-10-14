import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "../Header/Navbar";
import Carousel from "../Home/Carousel";




const AsideNav = () => {
    return (
        <>
       <Navbar></Navbar>
        <div className='grid grid-cols-12'>
                
                <Sidebar></Sidebar>
                
                <div className='col-span-10 h-screen overflow-y-auto'>
                    <Carousel></Carousel>
                    
                    <Outlet></Outlet>
                </div>

          </div>
          </>
    );
};

export default AsideNav;