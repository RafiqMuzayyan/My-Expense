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
      <div className='flex gap-10 pt-10'>

        <div className='w-full max-w-60'>

          <div>
            <h1 className='font-semibold text-4xl'>
              Hello John,
            </h1>
            <span className='text-black/40 text-sm '>
              Take a look at your current balance 😜
            </span>
          </div>

        </div>

        <div className='w-full'>
            <div>
              <div className='flex justify-between pl-12 items-center mb-4' >
                <h3 className='text-sm text-black/40'>Your Expense</h3>
                <select 
                  name="sort-by" 
                  id="sort-by"
                  className='py-2 px-3 bg-white rounded-xl text-sm'
                >
                  <option value="Sort By" selected disabled>Sort By</option>
                  <option value="">opsi 1</option>
                  <option value="">opsi 2</option>
                  <option value="">opsi 3</option>
                  <option value="">opsi 4</option>
                </select>
              </div>
              <div className='bg-white rounded-2xl'>
                <table className='w-full '>
                  <tr>
                    <th>Opsi 1</th>
                    <th>Opsi 2</th>
                    <th>Opsi 3</th>
                    <th>Opsi 4</th>
                  </tr>
                </table>
              </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default page
