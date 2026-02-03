import AmountColumn from '@/components/dashboard/AmountColumn'
import DataCard from '@/components/dashboard/DataCard'
import DonutChart from '@/components/dashboard/DonutChart'
import { BanknoteArrowDown, Search, TrendingDown, TrendingUp, WalletCards, WalletMinimal } from 'lucide-react'
import React from 'react'

const page = () => {
  const data = [
  { name: "Income", value: 200000 },
  { name: "Expense", value: 80000 },
  { name: "Balance", value:  120000},
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

          <div className='mb-8'>
            <h1 className='font-semibold text-4xl'>
              Hello John,
            </h1>
            <span className='text-black/40 text-sm '>
              Take a look at your current balance 😜
            </span>
          </div>

          {/* pie chart */}
          <div className="flex flex-col items-center gap-5">
            {/* Requested */}
            
            <DonutChart data={data}/>
            
            <div className='w-full flex justify-center items-center gap-2'>
                <div className='flex gap-1 items-center'>
                  <span className="w-3 h-3 rounded-full bg-secondary"/>
                  <h4 className='text-sm font-semibold text-black/70'>Balance</h4>
                </div>
                <div className='flex gap-1 items-center'>
                  <span className="w-3 h-3 rounded-full bg-succes"/>
                  <h4 className='text-sm font-semibold text-black/70'>Income</h4>
                </div>
                <div className='flex gap-1 items-center justify-between'>
                  <span className="w-3 h-3 rounded-full bg-danger"/>
                  <h4 className='text-sm font-semibold text-black/70'>Expense</h4>
                </div>
            </div>

          </div>

        </div>

        <div className='w-full '>
          
            <div className='w-full grid grid-cols-3 gap-4 mb-4'>
              
              <DataCard
                Icon={WalletCards}
                Title='Balance'
                Amount={40000}
              />
              <DataCard
                Icon={WalletMinimal}
                IconColor='bg-green-500'
                Title='Income'
                Amount={82.24}
              />
              <DataCard
                Icon={BanknoteArrowDown}
                IconColor='bg-red-500'
                Title='Expense'
                Amount={200.86}
              />
              
            </div>

            <div>
              <div className='flex justify-between pl-12 items-end mb-4' >
                <h3 className='text-sm text-black/40'>Your Transaction</h3>
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
              <div className='bg-white rounded-xl p-2 shadow max-h-74 overflow-y-auto'>
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
        </div>

      </div>
    </div>
  )
}

export default page
