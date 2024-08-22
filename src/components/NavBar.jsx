import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar bg-[#282a36] text-[#f8f8f2] relative z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-[#ff79c6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#44475a] rounded-box z-50 mt-3 w-52 p-2 shadow">
            <li><a href='/#about' className="text-[#f8f8f2] hover:text-[#ff79c6]">About us</a></li>
            <li><a href='/#team' className="text-[#f8f8f2] hover:text-[#ff79c6]">Team</a></li>
            <li>
              <a className="text-[#f8f8f2] hover:text-[#ff79c6]">Services</a>
              <ul className="p-2 bg-[#44475a]">
                <li><a href='/#fullstack' className="text-[#f8f8f2] hover:text-[#ff79c6]">Full Stack Developer</a></li>
                <li><a href='/#blockchain' className="text-[#f8f8f2] hover:text-[#ff79c6]">Blockchain Developer</a></li>
                <li><a href='/#uiux' className="text-[#f8f8f2] hover:text-[#ff79c6]">UI/UX Design</a></li>
                <li><a href='/contact' className="text-[#f8f8f2] hover:text-[#ff79c6]">Consulting & Strategy</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl text-[#ff79c6] flex items-center h-full">Walls Agency</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center">
          <li><a href='/#about' className="text-[#f8f8f2] hover:text-[#ff79c6]">About us</a></li>
          <li><a href='/#team' className="text-[#f8f8f2] hover:text-[#ff79c6]">Team</a></li>
          <li>
            <details className="flex items-center">
              <summary className="text-[#f8f8f2] hover:text-[#ff79c6]">Services</summary>
              <ul className="p-2 bg-[#44475a]">
                <li><a href='/#fullstack' className="text-[#f8f8f2] hover:text-[#ff79c6]">Full Stack Developer</a></li>
                <li><a href='/#blockchain' className="text-[#f8f8f2] hover:text-[#ff79c6]">Blockchain Developer</a></li>
                <li><a href='/#uiux' className="text-[#f8f8f2] hover:text-[#ff79c6]">UI/UX Design</a></li>
                <li><a href='/contact' className="text-[#f8f8f2] hover:text-[#ff79c6]">Consulting & Strategy</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        <a href='/contact' className="btn bg-[#ff79c6] hover:bg-[#50fa7b] text-[#282a36] border-none flex items-center">Contact Us</a>
      </div>
    </div>
  );
}

export default NavBar;
