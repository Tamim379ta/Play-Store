import React, { useContext } from 'react';
import { InstallContext } from '../Context/AppContext';
import { MdDelete, MdOutlineFileDownload } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Installation = () => {

  const { Install, setInstall } = useContext(InstallContext)
  const handelDeleteBtn = (id) => {
    const Filter = Install.filter(app => app.id !== id)
    toast.warning("App Unstalled")

    setInstall(Filter)
  }
  return (
    <div className='my-20'>

      <div className='py-10'>
        <h1 className='text-4xl text-center font-bold'>Your Installed App</h1>
        <p className='text-center'>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className='container space-y-3 p-5 mx-auto'>
        {
          Install.map(app => {
            return (
              <>
                <div className=' flex  justify-between items-center gap-5 p-5 rounded-2xl border border-gray-300'>
                  <div className='flex gap-5'>

                    <div>
                      <img
                        className='h-15  p-2 bg-base-200 rounded-2xl'
                        src={app.image} alt="" />
                    </div>

                    <div>

                      <h1 className='font-bold'>{app.title}</h1>

                      <div className='flex flex-col md:flex-row gap-2 mt-2 font-semibold'>
                        <div className='badge badge-soft badge-accent'>
                          <MdOutlineFileDownload />
                          {app.downloads}
                        </div>
                        <div className='badge badge-soft badge-error'>
                          <FaStar />
                          {app.ratingAvg}
                        </div>
                        <p className='text-gray-400'>{app.size}MB</p>

                      </div>

                    </div>


                  </div>

                  <div onClick={() => handelDeleteBtn(app.id)} className='btn cursor-pointer'>
                    <MdDelete className="text-2xl text-red-500" />
                  </div>
                </div>
              </>
            )
          })
        }
      </div>

    </div>
  );
};

export default Installation;