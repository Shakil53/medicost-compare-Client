import logo from '../../../assets/logo/logo1.svg';

const Footer = () => {
  return (
    <div className="bg-gradient-to-tr from-teal-100 to-teal-400 text-gray-800 p-8 md:p-10">
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        <aside className="text-center md:text-left">
          <img className="w-12 mx-auto md:ml-4" src={logo} alt="medicostcompare" />
          <p className="mt-2">
            Medicost Compare
            <br />
            <span>&copy; 2024 MedicostCompare. All Rights Reserved.</span>
          </p>
        </aside>
        
        <div className='flex flex-col-[2] gap-4 items-center justify-between'>
          <nav className="text-center md:text-left">
            <h6 className="font-semibold mb-2">Services</h6>
            <ul>
              <li><a href="#" className="hover:underline">Branding</a></li>
              <li><a href="#" className="hover:underline">Design</a></li>
              <li><a href="#" className="hover:underline">Marketing</a></li>
              <li><a href="#" className="hover:underline">Advertisement</a></li>
            </ul>
          </nav>

          <nav className="text-center md:text-left">
            <h6 className="font-semibold mb-2">Company</h6>
            <ul>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Press kit</a></li>
            </ul>
          </nav>

          <nav className="text-center md:text-left">
            <h6 className="font-semibold mb-2">Legal</h6>
            <ul>
              <li><a href="#" className="hover:underline">Terms of use</a></li>
              <li><a href="#" className="hover:underline">Privacy policy</a></li>
              <li><a href="#" className="hover:underline">Cookie policy</a></li>
            </ul>
          </nav>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
