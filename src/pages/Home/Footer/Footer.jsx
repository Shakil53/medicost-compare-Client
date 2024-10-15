import logo from '../../../assets/logo/logo1.svg'

const Footer = () => {
  return (
   <div className="bg-gradient-to-tr from-teal-100 to-teal-400 text-gray-800 p-10">
    <div className="flex flex-col sm:flex-row justify-between">
      <aside className="mb-4 sm:mb-0">
      <img className="w-12 sm:ml-4 md:ml-4" src={logo} alt="medicostcompare" />
        <p>
          Medicost Compare
          <br />
          <p>&copy; 2024 medicostCompare. All Rights Reserved.</p>
        </p>
      </aside>
      <nav>
        <h6 className="font-semibold mb-2">Services</h6>
        <ul>
          <li><a href="#" className="hover:underline">Branding</a></li>
          <li><a href="#" className="hover:underline">Design</a></li>
          <li><a href="#" className="hover:underline">Marketing</a></li>
          <li><a href="#" className="hover:underline">Advertisement</a></li>
        </ul>
      </nav>
      <nav>
        <h6 className="font-semibold mb-2">Company</h6>
        <ul>
          <li><a href="#" className="hover:underline">About us</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
          <li><a href="#" className="hover:underline">Jobs</a></li>
          <li><a href="#" className="hover:underline">Press kit</a></li>
        </ul>
      </nav>
      <nav>
        <h6 className="font-semibold mb-2">Legal</h6>
        <ul>
          <li><a href="#" className="hover:underline">Terms of use</a></li>
          <li><a href="#" className="hover:underline">Privacy policy</a></li>
          <li><a href="#" className="hover:underline">Cookie policy</a></li>
        </ul>
      </nav>
    </div>
  </div>
  
   
  );
};

export default Footer;