import { Search } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>

      {/* searchbar */}
      <div className=' flex w-full justify-end pt-10'>
        <div className='flex gap-1 items-center bg-white rounded-xl px-4 py-1.5 focus-within:ring-2 focus-within:ring-secondary'>
          <input type="text" placeholder='Search' className='text-sm outline-0'/>
          <button className='cursor-pointer text-secondary'>
            <Search size={20}/>
          </button>
        </div>
      </div>

      {/* content */}
      <div className='flex gap-4 pt-10'>

        <div>

          <div>
            <h1 className='font-semibold text-4xl'>
              Hello John,
            </h1>
            <span className='text-grey text-sm '>
              Take a look at your current balance 😜
            </span>
          </div>

        </div>

        <div>

        </div>

      </div>
    </div>
  )
}

export default page
