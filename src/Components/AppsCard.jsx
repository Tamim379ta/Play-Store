import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const AppsCard = ({ app }) => {
  return (
    <div>

      <div className='shadow-xl p-5 border  border-gray-400 rounded-2xl'>

        <div className='flex justify-center p-5'>
          <img
            className='h-50 bg-base-300 p-5 rounded-2xl'
            src={app.image} alt="" />
        </div>
        <h1 className='font-bold '>{app.title}</h1>

        <div className='flex justify-between mt-2 font-semibold'>
          <div className='badge badge-soft badge-accent'>
            <MdOutlineFileDownload />
            {app.downloads}
          </div>
          <div className='badge badge-soft badge-error'>
            <FaStar />
            {app.ratingAvg}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AppsCard;