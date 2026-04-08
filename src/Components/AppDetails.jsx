import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Download from '../assets/icon-downloads.png'
import Rating from '../assets/icon-ratings.png'
import Reviews from '../assets/icon-review.png'
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { XAxis, YAxis, Tooltip } from 'recharts';
import { InstallContext } from '../Context/AppContext';





const AppDetails = () => {
  const data = useLoaderData()
  const { id } = useParams()

  const { handelInstall } = useContext(InstallContext)


  const apps = data.find(appid => Number(id) === appid.id)

  const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = apps

  return (
    <div className='container mx-auto p-5 '>

      <div className='bg-base-300 rounded-2xl p-5'>

        <div className='flex flex-col md:flex-row gap-10 '>

          <div>
            <img
              className='h-50 p-5 rounded-2xl bg-base-200 '
              src={image} alt="" />
          </div>

          <div>

            <h1 className='text-2xl font-bold'>{title}</h1>
            <p>Developed By: <span className='text-primary'>{companyName}</span></p>

            <div className='divider  text-gray-300 before:bg-gray-300 after:bg-gray-300'></div>

            <div className='flex gap-5 md:gap-10'>
              <div className='space-y-2'>
                <img src={Download} alt="" />
                <p>Downloads</p>
                <p className='font-extrabold text-xl  md:text-3xl'>{downloads}</p>
              </div>

              <div className='space-y-2'>
                <img src={Rating} alt="" />
                <p>Average Rating</p>
                <p className='font-extrabold text-xl  md:text-3xl'>{ratingAvg}</p>
              </div>

              <div className='space-y-2'>
                <img src={Reviews} alt="" />
                <p>Total Reviews</p>
                <p className='font-extrabold text-xl  md:text-3xl'>{reviews}</p>
              </div>
            </div>

            <button onClick={() => handelInstall(apps)} className='btn btn-success mt-3 text-white font-semibold'>Install Now ({size}MB)</button>

          </div>


        </div>
        <div className='divider  text-gray-300 before:bg-gray-300 after:bg-gray-300'></div>


        <div style={{ width: '100%', height: 250 }}>
          <ResponsiveContainer>
            <BarChart data={ratings} layout="vertical">
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>


        <div className='space-y-2'>
          <h1 className='font-bold'>Description</h1>
          <p>{description}</p>
        </div>


      </div>

    </div>
  );
};

export default AppDetails;