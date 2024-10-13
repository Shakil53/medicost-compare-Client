import { NavLink } from 'react-router-dom';
import drug1 from '../../../assets/logo/png9-1655549176697.webp';
import drug2 from '../../../assets/logo/png5-1655549572293.webp';
import drug3 from '../../../assets/logo/4-1655900254753.webp';
import drug4 from '../../../assets/logo/zinc-1655965616260.webp';
import drug5 from '../../../assets/logo/png7-1655549257017.webp';
import drug6 from '../../../assets/logo/3-1655900589761.webp';
import drug7 from '../../../assets/logo/png2-1655549071618.webp';
import drug8 from '../../../assets/logo/png6-1655549245892.webp';
import drug9 from '../../../assets/logo/png-1655549208979.webp';
import drug10 from '../../../assets/logo/osud11-1655900643211.webp';
import drug11 from '../../../assets/logo/6-1655900321311.webp';
import drug12 from '../../../assets/logo/8-1655900673941.webp';
import drug13 from '../../../assets/logo/osud9-1655900346955.webp';
import drug14 from '../../../assets/logo/gynecological-1655965658095.webp';
import { FaAngleRight } from "react-icons/fa";



const Sidebar = () => {
    return (
        <aside className='bg-teal-200 col-span-2 h-screen sticky left-0 top-0 overflow-auto p-4 lg:p-5 '>
            <h1 className='text-xl font-medium truncate'>Category of Medicine</h1>
            <nav className='flex flex-col gap-2 mt-5'>
                <NavLink to="/aside/otc-medicine" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                <img className='w-10 mr-3' src={drug1}></img>
                    <span className='truncate font-semibold'>OTC Medicine</span>
                <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/nasal" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-10 mr-3' src={drug2}></img>
                   <span className='truncate font-semibold'>Nasal</span>
                    <span className='text-sm shrink-0'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/gastric" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-10 mr-3' src={drug3}></img>
                    <span className='truncate font-semibold'>Gastric</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/zinc-deficiency" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-10 mr-3' src={drug4}></img>
                   <span className='truncate font-semibold'>Zinc-Deficiency</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/eczema" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-10 mr-3' src={drug5}></img>
                    <span className='truncate font-semibold'>Eczema</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/spasm" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-10 mr-3' src={drug6}></img>
                    <span className='truncate font-semibold'>Spasm</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/diarrhea" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-10 mr-3' src={drug7}></img>
                    <span className='truncate font-semibold'>Diarrhea</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/fever" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-10 mr-3' src={drug8}></img>
                    <span className='truncate font-semibold'>Fever</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/cough-flu" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-10 mr-3' src={drug9}></img>
                    <span className='truncate font-semibold'>Cough And Flu</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/ulcer" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-10 mr-3' src={drug10}></img>
                    <span className='truncate font-semibold'>Ulcer</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/constipation" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-10 mr-3' src={drug11}></img>
                    <span className='truncate font-semibold'>Constipation</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/vitamins" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-10 mr-3' src={drug1}></img>
                    <span className='truncate font-semibold'>Vitamins</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/dermatitis" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-10 mr-3' src={drug12}></img>
                    <span className='truncate font-semibold'>Dermatitis</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/oral-fungal-infection" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-10 mr-3' src={drug13}></img>
                    <span className='truncate font-semibold'>Oral Fungal Infection</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/gynecological" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-10 mr-3' src={drug14}></img>
                    <span className='truncate font-semibold'>Gynecological</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
            </nav>
            </aside>
    );
};

export default Sidebar;