import React from 'react';
import { useLoaderData, useNavigation } from 'react-router';
import AppsCard from './AppsCard';
import { RingLoader } from 'react-spinners';

const Apps = () => {

  const navigation = useNavigation();
  const Apps = useLoaderData();
  if (navigation.state === "loading") {
    return (
      <div className="h-screen flex items-center justify-center">
        <RingLoader color="#3b82f6" />
      </div>
    )
  }
  return (
    <div className='container mx-auto my-10'>

      <h1 className='text-4xl font-bold text-center'>Our All Applications</h1>
      <p className='text-center mt-3'>Explore All Apps on the Market developed by us. We code for Millions</p>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-10   md:p-0 mt-10 gap-10'>
        {
          Apps.map(app => <AppsCard key={app.id} app={app} />)
        }
      </div>

    </div>
  );
};

export default Apps;