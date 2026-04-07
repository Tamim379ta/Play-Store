import React from 'react';
import { NavLink } from 'react-router';
import NavImg from '../assets/logo.png'
import { IoLogoGithub } from 'react-icons/io';

const Navbar = () => {

  const Links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => `font-semibold mr-2 ${isActive ? 'bg-linear-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent' : ""}`}
          to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => `font-semibold mr-2 ${isActive ? 'bg-linear-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent' : ""}`}
          to={"/apps"}>Apps</NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => `font-semibold mr-2 ${isActive ? 'bg-linear-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent' : ""}`}
          to={"/installation"}>Installation</NavLink>
      </li>
    </>
  )
  return (
    <div className=' border-b-2 border-gray-300'>
      <div className="navbar  container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {Links}
            </ul>
          </div>

          <div className='flex items-center gap-2'>
            <img 
            className='h-10'
             src={NavImg} alt="" />
            <a className="bg-linear-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent text-xl font-bold">HERO.IO</a>
          </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Links}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn text-xl bg-linear-to-t from-sky-500 to-indigo-500 text-white">
            <IoLogoGithub />
            Contribute</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;