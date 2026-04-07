import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import HeroImg from '../assets/hero.png'
import Stat from './Stat';
import TrendingApps from './TrendingApps';
const Hero = () => {
  return (
    <>
      <div className='bg-base-200 pt-12'>
        <div className='text-center container mx-auto space-y-3'>
          <h1 className='text-5xl font-bold'>
            We Build <br />
            <span className=' bg-linear-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent'>Porductive</span> Apps
          </h1>
          <p>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

          <div className='flex gap-2 items-center justify-center'>
            <button className='btn text-[16px]'>
              <IoLogoGooglePlaystore />
              Google Play</button>
            <button className='btn text-[16px] bg-linear-to-t from-sky-500 to-indigo-500 text-white'>
              <FaAppStoreIos />
              App Store</button>
          </div>

          <div className='flex justify-center px-5'>
            <img
              className='h-60 md:h-100'
              src={HeroImg} alt="" />
          </div>
        </div>
      </div>

      <Stat/>

      <TrendingApps />

    </>
  );
};

export default Hero;