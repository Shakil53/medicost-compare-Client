
import Footer from '@/Pages/Home/Footer/Footer';
import Navbar from '@/pages/Home/Header/Navbar';
import { Outlet, useLocation } from 'react-router-dom';


const Main = () => {

  const location = useLocation()
  const noFooterForLogin = location.pathname.includes('login');
  const noFooterForRegister = location.pathname.includes('register');

  const showNavbar = location.pathname.includes('compare-price');

    return (
      <div>
            {showNavbar && <Navbar />}
        <Outlet></Outlet>
        {noFooterForLogin || noFooterForRegister ? null : <Footer />}
        </div>
    );
};

export default Main;