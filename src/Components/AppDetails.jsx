import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
  const data = useLoaderData()
  const { id } = useParams()

  const apps = data.find(appid => Number(id) === appid.id)

  const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = apps

  return (
    <div className='container mx-auto my-10'>

      <div className='flex gap-10 bg-base-300 rounded-2xl p-5'>

        <div>
          <img
            className='h-50 p-5 rounded-2xl bg-base-200 '
            src={image} alt="" />
        </div>

        <div>

          <h1 className='text-2xl font-bold'>{title}</h1>
          <p>Developed By: <span className='text-primary'>{companyName}</span></p>

          <div className='divider  text-gray-300 before:bg-gray-300 after:bg-gray-300'></div>

          

        </div>



      </div>

    </div>
  );
};

export default AppDetails;