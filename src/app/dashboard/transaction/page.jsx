import AmountColumn from '@/components/dashboard/AmountColumn'
import BarrChart from '@/components/dashboard/BarChart'
import ModalForm from '@/components/dashboard/ModalForm'
import { PlusCircle } from 'lucide-react'
import React from 'react'

const page = () => {
  const data = [
    { name: '01', value: 120000 },
    { name: '02', value: 95000 },
    { name: '03', value: 180000 },
    { name: '04', value: 75000 },
    { name: '05', value: 210000 },
    { name: '06', value: 90000 },
    { name: '07', value: 160000 },
    { name: '08', value: 130000 },
    { name: '09', value: 175000 },
    { name: '10', value: 100000 },

    { name: '11', value: 220000 },
    { name: '12', value: 140000 },
    { name: '13', value: 190000 },
    { name: '14', value: 110000 },
    { name: '15', value: 250000 },
    { name: '16', value: 90000 },
    { name: '17', value: 170000 },
    { name: '18', value: 200000 },
    { name: '19', value: 125000 },
    { name: '20', value: 180000 },

    { name: '21', value: 160000 },
    { name: '22', value: 140000 },
    { name: '23', value: 210000 },
    { name: '24', value: 95000 },
    { name: '25', value: 230000 },
    { name: '26', value: 120000 },
    { name: '27', value: 185000 },
    { name: '28', value: 170000 },
    { name: '29', value: 260000 },
    { name: '30', value: 200000 },
  ]


  return (
    <div className='h-full overflow-y-auto no-scrollbar pt-8'>
      <ModalForm/>
      <div className='mb-4'>
        <div className='flex justify-between items-end mb-4' >
          <h1 className='pl-7 font-semibold text-black/50'>Your Transaction</h1>
          <div className='flex gap-3  text-black/70'>
            <button className='flex items-center px-4 py-1.5 bg-white shadow rounded-xl gap-3 text-sm font-semibold ml-8 cursor-pointer'>
              <PlusCircle/> 
              <span>Add transaction</span>
            </button>
            <select 
              name="sort-by" 
              id="sort-by"
              className='py-1.5 px-3 bg-white rounded-xl text-sm font-semibold shadow'
              defaultValue={"none"}

            >
              <option value="">All</option>
              <option value="">opsi 2</option>
              <option value="">opsi 3</option>
              <option value="">opsi 4</option>
            </select>
            <select 
              name="sort-by" 
              id="sort-by"
              className='py-1.5 px-3 bg-white rounded-xl text-sm font-semibold shadow'
              defaultValue={"none"}

            >
              <option value="">Recent</option>
              <option value="">opsi 2</option>
              <option value="">opsi 3</option>
              <option value="">opsi 4</option>
            </select>
          </div>
        </div>
        <div className='bg-white rounded-xl p-2 shadow max-h-100 overflow-y-auto no-scrollbar'>
          <table className='w-full text-sm '>
            <thead className='text-black/50'>
              <tr>
                <th>Transaction</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className='text-black/50'>
              <tr>
                <td>Makan Siang</td>
                <td>
                  <AmountColumn amount={25000} />
                </td>
                <td>Food</td>
                <td>29 Jan 2026</td>
              </tr>

              <tr>
                <td>Transport Ojek</td>
                <td>
                  <AmountColumn amount={13500} />
                </td>
                <td>Transport</td>
                <td>29 Jan 2026</td>
              </tr>

              <tr>
                <td>Gaji Bulanan</td>
                <td>
                  <AmountColumn income amount={4500000} />
                </td>
                <td>Salary</td>
                <td>28 Jan 2026</td>
              </tr>

              <tr>
                <td>Kopi</td>
                <td>
                  <AmountColumn amount={18000} />
                </td>
                <td>Drink</td>
                <td>28 Jan 2026</td>
              </tr>

              <tr>
                <td>Internet Bulanan</td>
                <td>
                  <AmountColumn amount={150000} />
                </td>
                <td>Utilities</td>
                <td>27 Jan 2026</td>
              </tr>

              <tr>
                <td>Freelance Project</td>
                <td>
                  <AmountColumn income amount={1200000} />
                </td>
                <td>Freelance</td>
                <td>27 Jan 2026</td>
              </tr>

              <tr>
                <td>Jajan</td>
                <td>
                  <AmountColumn amount={12000} />
                </td>
                <td>Snack</td>
                <td>27 Jan 2026</td>
              </tr>

              <tr>
                <td>Langganan Spotify</td>
                <td>
                  <AmountColumn amount={54990} />
                </td>
                <td>Subscription</td>
                <td>26 Jan 2026</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      <BarrChart data={data}/>
    </div>
  )
}

export default page
