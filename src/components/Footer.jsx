import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/logo.png';
const Footer = () => {
  return (
    <footer className="bg-[#282a36] text-[#f8f8f2] py-10 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
      <aside className="flex flex-col items-start space-y-4">
        <a href="/" className="inline-block">
          <img
            src={logo}
            alt="Walls Agency logo"
            className="cursor-pointer	 transform transition-transform duration-300 ease-out hover:scale-110" // Adds the scaling effect
          />
        </a>

      </aside>



        {/* Services Section */}
        <nav className="space-y-2">
          <h6 className="footer-title text-[#ff79c6] font-semibold">Services</h6>
          <a href="#services" className="block text-[#f8f8f2] hover:text-gray-400 transition duration-300">Full Stack Developer</a>
          <a href="#services" className="block text-[#f8f8f2] hover:text-gray-400 transition duration-300">Blockchain Developer</a>
          <a href="#services" className="block text-[#f8f8f2] hover:text-gray-400 transition duration-300">UI/UX Design</a>
          <a href="#services" className="block text-[#f8f8f2] hover:text-gray-400 transition duration-300">Consulting & Strategy</a>
        </nav>

        {/* Company Section */}
        <nav className="space-y-2">
          <h6 className="footer-title text-[#ff79c6] font-semibold">Company</h6>
          <Link to="/#about" className="block text-[#f8f8f2] hover:text-gray-400 transition duration-300">About us</Link>
          <Link to="/#team" className="block text-[#f8f8f2] hover:text-gray-400 transition duration-300">Team</Link>
          <Link to="/contact" className="block text-[#f8f8f2] hover:text-gray-400 transition duration-300">Contact</Link>
        </nav>

        {/* Legal Section */}
        <nav className="space-y-2">
          <h6 className="footer-title text-[#ff79c6] font-semibold">Legal</h6>
          <a href="/terms" className="block text-[#f8f8f2] hover:text-gray-400 transition duration-300">Terms of use</a>
          <Link to="/privacy-policy" className="block text-[#f8f8f2] hover:text-gray-400 transition duration-300">Privacy policy</Link>
          <a href="/cookie-policy" className="block text-[#f8f8f2] hover:text-gray-400 transition duration-300">Cookie policy</a>
        </nav>

        {/* Social Section */}
        <nav className="space-y-2">
          <h6 className="footer-title text-[#ff79c6] font-semibold">Social</h6>
          <div className="flex space-x-4">
            <a href="https://twitter.com/wallsagency" className="text-[#f8f8f2] hover:text-gray-400 transform hover:scale-125 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://youtube.com/youryoutube" className="text-[#f8f8f2] hover:text-gray-400 transform hover:scale-125 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://facebook.com/walls.agency/" className="text-[#f8f8f2] hover:text-gray-400 transform hover:scale-125 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
      <div className="mt-8 text-center text-sm text-[#f8f8f2]">
        © {new Date().getFullYear()} Walls Agency Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
