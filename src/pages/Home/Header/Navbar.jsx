import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo/logo1.svg';
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button';
import {  useContext, useState } from 'react';
import { AuthContext } from '@/context/AuthProvider/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import app from '@/firebase/firebase.config';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar } from '@/components/ui/avatar';
import { ShoppingCart } from 'lucide-react';
import useProduct from '@/hooks/useProduct';



const auth = getAuth(app)

const Navbar = () => {
    const {user} = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    const [cart] = useProduct();
   
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
    
  
const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        
      })
    .catch(error => console.error(error))
  }
   
    return (
        <div className='bg-gradient-to-r from-teal-400 to-teal-200 h-16 flex items-center justify-between px-4'>
        {/* Company Logo and Hamburger Menu */}
        <div className='flex items-center flex-shrink-0 pb-3'>
            <motion.div
                initial={{ x: -150 }}
                animate={{ x: 45, y: 6, scale: 1.1 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 70 }}
                className="flex items-center"
            >
                <NavLink to='/'>
                    <img className="w-12 sm:ml-4 md:ml-4" src={logo} alt="medicostcompare" />
                </NavLink>
            </motion.div>

            {/* Hamburger Menu for Mobile View */}
            <div className="flex md:hidden -ml-14">
                <button onClick={toggleNavbar} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
                    {/* Hamburger menu icon */}
                    <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* Close icon */}
                    <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        {/* Nav Items with Hamburger Menu for Mobile */}
        <div className="flex-1 flex justify-center mx-auto">
            <div className="hidden md:flex items-baseline space-x-4 ml-0 sm:ml-[520px]">
                <NavLink to="/">
                    <Button variant='link' className=" text-slate-700 px-3 py-2 rounded-md text-md font-semibold">Home</Button>
                </NavLink>
                <NavLink to="/compare-price">
                    <Button variant='link' className='px-3 py-2 rounded-md text-md font-semibold'>Compare</Button>
                </NavLink>
                <NavLink to="/consultant">
                    <Button variant='link' className='px-3 py-2 rounded-md text-md font-semibold'>Consultant</Button>
                </NavLink>
                <NavLink to="/">
                    <Button variant="text" className="ml-0 sm:ml-36 relative inline-flex items-center px-3 py-2 rounded-md text-md font-semibold text-black">
                        <ShoppingCart></ShoppingCart>
                        <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-white bg-teal-600 rounded-full" style={{ textDecoration: 'none' }}>
                            +{cart.length}
                        </span>
                    </Button>
                </NavLink>
            </div>
        </div>

        {/* Responsive menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden fixed top-16 right-2 bg-white bg-opacity-30 backdrop-blur-md p-4 rounded-lg shadow-lg mr-40 `}>
    <div className="px-2 pt-2 pb-3">
        <ul className="space-y-2">
            <li>
                <NavLink to="/">
                    <Button variant='link' className='px-3 py-2 rounded-md text-md font-semibold'>Home</Button>
                </NavLink>
            </li>
            <li>
                <NavLink to="/compare-price">
                    <Button variant='link' className='px-3 py-2 rounded-md text-md font-semibold'>Compare</Button>
                </NavLink>
            </li>
            <li>
                <NavLink to="/consultant">
                    <Button variant='link' className='px-3 py-2 rounded-md text-md font-semibold'>Consultant</Button>
                </NavLink>
            </li>
            <li>
            <NavLink to="/">
                    <Button variant="text" className="ml-0 sm:ml-36 relative inline-flex items-center px-3 py-2 rounded-md text-md font-semibold text-black">
                        <ShoppingCart></ShoppingCart>
                        <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-white bg-teal-600 rounded-full" style={{ textDecoration: 'none' }}>
                            +99
                        </span>
                    </Button>
                </NavLink>
            </li>
        </ul>
    </div>
</div>


        {/* Search Input and Avatar */}
        <div className='flex justify-between items-center gap-10 mr-10'>
            <Input type="email" placeholder="type medicine or generic" className='input input-bordered w-36 h-12 md:w-auto bg-white' />

            {/* Avatar and Dropdown Menu */}
            <Avatar className="avatar online relative">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <motion.div initial={{ y: -50 }} animate={{ x: 0, y: -1, scale: 1.2 }} transition={{ duration: 0.5, type: 'spring', stiffness: 70 }} className="w-12 rounded-full btn m-1">
                            <img
                                className="rounded-full"
                                src={user?.photoURL}
                                alt={user?.email || "User Avatar"}
                                />
                            {
                                // condition ? it (or:) it
                                user?.email ? <img alt="user photo" src={user?.photoURL}></img> : 
                                <span className="loading loading-ring loading-lg"></span>
                            }
                        </motion.div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="mt-3 w-56 mr-16 max-h-60 overflow-y-auto">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={() => console.log("Profile clicked")}>Profile</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => console.log("Settings clicked")}>Settings</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => console.log("Logout clicked")}>
                                {
                                    user?.email ? <Link to='/' onClick={handleSignOut}>Sign Out</Link> :
                                    <Link to='/login'>Sign In</Link>                
                                }
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </Avatar>
        </div>
    </div>

    );
};

export default Navbar;