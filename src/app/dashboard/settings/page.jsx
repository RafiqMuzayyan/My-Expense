import React from 'react'

const page = () => {
    return (
      <div className='pt-8'>
        <div className='flex flex-col  justify-center mb-4'>
           <h1 className=' font-semibold text-2xl text-black/50'>Settings</h1>
          <span className='text-xs text-black/70 font-poppins'>Manage your details and personal preferences hire.</span>
        </div>
        <div className='w-full bg-white rounded-xl shadow p-6'>
          <div className='flex items-center pt-4  border-b border-black/20 '>
            <div className='w-[30%]'>
              <h3 className='font-semibold'>Basics</h3>
            </div>
          </div>
          <div className='flex items-center py-4  border-b border-black/20 text-sm'>
            <div className='w-[30%]'>
              <h3 >Name</h3>
            </div>
            <div className='w-[70%] flex items-center justify-between'>
              <h1>JOhn KInd</h1>
              <button className='py-1 px-2 rounded bg-foreground '>
                Edit
              </button>
            </div>
          </div>
           <div className='flex items-center py-4  border-b border-black/20 text-sm'>
            <div className='w-[30%]'>
              <h3 >Email</h3>
            </div>
            <div className='w-[70%] flex items-center justify-between'>
              <h1>john@gmail.com</h1>
              <button className='py-1 px-2 rounded bg-foreground '>
                Edit
              </button>
            </div>
          </div>
           <div className='flex items-center py-4  border-b border-black/20 text-sm'>
            <div className='w-[30%]'>
              <h3 >Password</h3>
            </div>
            <div className='w-[70%] flex items-center justify-between'>
              <button className='py-1 px-2 rounded bg-foreground '>
                Edit
              </button>
            </div>
          </div>
          <div className='flex items-center pt-6  border-b border-black/20 '>
            <div className='w-[30%]'>
              <h3 className='font-semibold'>Preferences</h3>
            </div>
          </div>
          <div className='flex items-center py-4  border-b border-black/20 text-sm'>
            <div className='w-[30%]'>
              <h3 >Language</h3>
            </div>
            <div className='w-[70%] flex items-center justify-between'>
              <select name="" id="" className='px-2 py-1 bg-foreground rounded'>
                <option value="indonesia">Indonesia</option>
                <option value="english">English</option>
              </select>
            </div>
          </div>
          <div className='flex items-center py-4  border-b border-black/20 text-sm'>
            <div className='w-[30%]'>
              <h3 >Language</h3>
            </div>
            <div className='w-[70%] flex items-center justify-between'>
              <select name="" id="" className='px-2 py-1 bg-foreground rounded text-xs'>
                <option value="MMM D, YYYY">MMM D, YYYY</option>
                <option value="D MMMM YYYY">D MMMM YYYY</option>
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
}

export default page
