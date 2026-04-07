import React, { use } from 'react';
import { HiH1 } from 'react-icons/hi2';
import AppsCard from './AppsCard';

const appPromise = fetch('/data.json').then(res => res.json())

const TrendingApps = () => {
  const apps = use(appPromise)
  return (
    <div className='container mx-auto my-10'>
      <h1 className='text-4xl font-bold text-center'>Trending Apps</h1>
      <p className='text-center mt-2'>Explore All Trending Apps on the Market developed by us</p>

     <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-10'>
      {
        apps.map(app => <AppsCard key={app.id} app={app}/>)
      }
     </div>

     <div className='flex justify-center mt-8'>
     <button className='btn text-white font-semibold px-10  bg-linear-to-t from-sky-500 to-indigo-500'>Show All</button>
      </div>      
    </div>
  );
};

export default TrendingApps;