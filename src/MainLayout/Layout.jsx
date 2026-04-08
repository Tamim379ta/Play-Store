import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer/>

      <ToastContainer />
      
    </div>
  );
};

export default Layout;