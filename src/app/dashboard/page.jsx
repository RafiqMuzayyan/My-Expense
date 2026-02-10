import AmountColumn from '@/components/dashboard/AmountColumn'
import DataCard from '@/components/dashboard/Card/DataCard'
import DonutChart from '@/components/dashboard/chart/DonutChart'
import Pagination from '@/components/FormItem/Pagination'
import SearchBar from '@/components/FormItem/SearchBar'
import SelectInput from '@/components/FormItem/SelectInput'
import { BanknoteArrowDown, Search, TrendingDown, TrendingUp, WalletCards, WalletMinimal } from 'lucide-react'
import React from 'react'

const page = () => {
  const data = [
    { name: "Income", value: 200000, color: "#00c951" },  
    { name: "Expense", value: 80000, color: "#fb2c36" }, 
    { name: "Balance", value: 120000, color: "#3b6bd4" },
  ]
  const balance = data[2].value


  return (
    <div className='w-full h-full overflow-y-auto no-scrollbar'>

      {/* searchbar */}
      <div className=' flex w-full justify-end pt-10'>
        <SearchBar />
      </div>

      {/* content */}
      <div className='flex gap-8   pt-10  '>

        <div className='w-full flex flex-col gap-8 justify-center  max-w-60'>

          <div className='flex flex-col gap-8'>           
            <div className=''>
              <h1 className='font-semibold text-4xl'>
                Hello John,
              </h1>
              <span className='text-black/40 text-sm '>
                You spent Rp 200.860 this month
              </span>
            </div>
            {/* chart */}
            <div className="flex flex-col items-center gap-5">
              {/* Requested */}
              
              <DonutChart data={data} centerData={balance} centerTitle='Total Balance'/>
              
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

          {/* card */}
          <div className='w-full grid grid-cols-1 gap-4 mb-4 '>
              
            <DataCard
              Icon={WalletCards}
              Title='This Month Balance'
              Amount={40000}
            />
            <DataCard
              Icon={WalletMinimal}
              IconColor='bg-succes'
              Title='This Month Income'
              Amount={40000}
            />
            <DataCard
              Icon={BanknoteArrowDown}
              IconColor='bg-danger'
              Title='This Month Expense'
              Amount={0}
            />
            
          </div>

        </div>

        <div className='w-full h-full pb-2 px-1'>
          
            

            <div>
              <div className='flex justify-between pl-12 items-end mb-4' >
                <h3 className='text-sm font-semibold text-black/40'>Recently Transaction</h3>
                <SelectInput
                  data={[
                    { label: "All", value: "" },
                    { label: "Income", value: "income" },
                    { label: "Expense", value: "expense" },
                  ]}
                  name='sort'
                  id='sort'
                />
              </div>
              
              {/* table */}
              <div className='bg-white rounded-xl p-2 shadow'>
                <table className='w-full text-sm '>
                  <thead className='text-black/50 '>
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
                      <td>Transport Ojek</td>
                      <td>
                        <AmountColumn amount={13500} />
                      </td>
                      <td>Transport</td>
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
                <Pagination/>
              </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default page
