import DonutChart from '@/components/dashboard/DonutChart'
import { Search } from 'lucide-react'
import React from 'react'

const page = () => {
  const data = [
  { name: "Requested", value: 200.86 },
  { name: "Unrequested", value: 82.34 },
]

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

          <div className='mb-4'>
            <h1 className='font-semibold text-4xl'>
              Hello John,
            </h1>
            <span className='text-black/40 text-sm '>
              Take a look at your current balance 😜
            </span>
          </div>

          {/* pie chart */}
          <div className="flex flex-col items-center ">
            {/* Requested */}
            <div className="w-full flex flex-col text-sm items-start">
              <p className="text-gray-500">Expense</p>
              <div className="flex items-center gap-2 font-semibold">
                <span className="w-3 h-2 rounded-full bg-secondary" />
                <h4>Rp {data[0].value}</h4>
              </div>
            </div>
            <DonutChart data={data}/>
            <div className="w-full flex flex-col text-sm items-end ">
              <p className="text-gray-500">Income</p>
              <div className="flex items-center gap-2 font-semibold">
                <span className="w-3 h-2 rounded-full bg-yellow" />
                <h4>Rp {data[1].value}</h4>
              </div>
            </div>
          </div>

        </div>

        <div className='w-full'>
            <div>
              <div className='flex justify-between pl-12 items-end mb-4' >
                <h3 className='text-sm text-black/40'>Your Expense</h3>
                <select 
                  name="sort-by" 
                  id="sort-by"
                  className='py-2 px-3 bg-white rounded-xl text-sm'
                  defaultValue={"none"}
                >
                  <option value="none" disabled>Sort By</option>
                  <option value="">opsi 1</option>
                  <option value="">opsi 2</option>
                  <option value="">opsi 3</option>
                  <option value="">opsi 4</option>
                </select>
              </div>
              <div className='bg-white rounded-xl p-2 shadow'>
                <table className='w-full text-sm '>
                  <thead className='text-black/50'>
                    <tr>
                      <th>Expense</th>
                      <th>Amount</th>
                      <th>Category</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody className='text-black/50'>
                    <tr>
                      <td>Makan Siang</td>
                      <td>Rp25.000</td>
                      <td>Food</td>
                      <td>29 Jan 2026</td>
                    </tr>
                    <tr>
                      <td>Transport Ojek</td>
                      <td>Rp15.000</td>
                      <td>Transport</td>
                      <td>29 Jan 2026</td>
                    </tr>
                    <tr>
                      <td>Kopi</td>
                      <td>Rp18.000</td>
                      <td>Drink</td>
                      <td>28 Jan 2026</td>
                    </tr>
                    <tr>
                      <td>Internet Bulanan</td>
                      <td>Rp150.000</td>
                      <td>Utilities</td>
                      <td>27 Jan 2026</td>
                    </tr>
                    <tr>
                      <td>Jajan</td>
                      <td>Rp12.000</td>
                      <td>Snack</td>
                      <td>27 Jan 2026</td>
                    </tr>
                    <tr>
                      <td>Langganan Spotify</td>
                      <td>Rp54.990</td>
                      <td>Subscription</td>
                      <td>26 Jan 2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default page
