
import Footer from '@/Pages/Home/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {

  const location = useLocation()
  const noFooterForLogin = location.pathname.includes('login');
  const noFooterForRegister = location.pathname.includes('register');

    return (
        <div>
        <Outlet></Outlet>
        {noFooterForLogin || noFooterForRegister ? null : <Footer />}
        </div>
    );
};

export default Main;