import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NavLink, Outlet } from 'react-router-dom';
import img1 from '../../assets/consultation/banner.jpg';
import Navbar from '../Home/Header/Navbar';


const Consultation = () => {
    
   
    return (
        <>
        <Navbar></Navbar>
       <div className='max-w-full mx-auto'>
        
        {/* header part */}
        <div className=''>
            <div className='absolute p-2 md:p-4 lg:p-5 mt-5 md:mt-12 lg:mt-40 ml-8 md:ml-32 lg:ml-72'>
                
                <div className='max-w-sm md:max-w-md'>
                    <h1 className='text-2xl md:text-5xl font-bold'>Find Your Doctor!</h1>
                    <p className='mt-4 text-sm'>Get Telemedicine and Doctor Video Consultation service with thousands of Doctors and Hospitals in Bangladesh.</p>
                </div>
              
                <div className="flex w-full max-w-sm md:max-w-lg items-center space-x-2 mt-2 md:mt-8">
                   <Input type="name"  placeholder="Take Doctor Appointments" />
                    <Button type="submit">Subscribe</Button>
                    {/* trandig */}
                </div>
                    <div>
                    <nav className='flex gap-2'>
                        <h1 className='text-md'>Trending:</h1>
                            <NavLink to='/consultant/cancer-specialist' className='no-underline hover:underline'>Cancer Specialist,</NavLink>    
                            <NavLink to='/consultant/medicine-specialist' className='no-underline hover:underline'>Medicine Specialist,</NavLink>    
                            <NavLink to='/consultant/neurology' className='no-underline hover:underline'>Neurology</NavLink>    
                            <NavLink to='/consultant/ophthalmologist' className='no-underline hover:underline'>Ophthalmologist</NavLink>    
                        </nav>
                    </div>
            </div>
            <div className=''>
                 <img className='' src={img1}></img>   
            </div>
        
            </div>
        </div>
        <Outlet></Outlet>
    </>
    );
};

export default Consultation;