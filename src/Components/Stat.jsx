import React from 'react';

const Stat = () => {
  return (
    <div className='bg-linear-to-t from-sky-500 to-indigo-500 p-10 text-white'>

      <h1 className='text-center text-4xl  font-bold'>Trusted by Millions, Built for You</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto ">
        <div className="stat space-y-2 place-items-center">
          <div className="text-gray-300">Total Downloads</div>
          <div className=" text-5xl font-extrabold">29.6M</div>
          <div className="text-gray-300">21% more than last month</div>
        </div>

        <div className="stat space-y-2 place-items-center">
          <div className=" text-gray-300">Total Reviews</div>
          <div className=" text-5xl font-extrabold">906K</div>
          <div className="text-gray-300">46% more than last month</div>
        </div>

        <div className="stat space-y-3 place-items-center">
          <div className="text-gray-300">Active Apps</div>
          <div className=" text-5xl font-extrabold">132+</div>
          <div className="text-gray-300">31 more will Launch</div>
        </div>
      </div>

    </div>
  );
};

export default Stat;