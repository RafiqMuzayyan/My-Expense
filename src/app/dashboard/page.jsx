import AmountColumn from '@/components/dashboard/table/AmountColumn'
import { DataCard, TransactionCard } from '@/components/dashboard/Card'
import DonutChart from '@/components/dashboard/chart/DonutChart'
import Pagination from '@/components/dashboard/table/Pagination'
import SearchBar from '@/components/FormItem/SearchBar'
import SelectInput from '@/components/FormItem/SelectInput'
import { ArrowLeftRight, BanknoteArrowDown, Percent,  TrendingDown, TrendingUp, WalletCards, WalletMinimal } from 'lucide-react'
import React from 'react'
import LineCharts from '@/components/dashboard/chart/LinesChart'



const page = () => {
  const data = [
    { name: "Income", value: 200000, color: "#00c951" },  
    { name: "Expense", value: 80000, color: "#fb2c36" }, 
    { name: "Balance", value: 120000, color: "#3b6bd4" },
  ]
  const balance = data[2].value


  return (
    <div className='w-full h-full justify-between overflow-y-auto no-scrollbar'>

      {/* searchbar */}
      <div className=' flex w-full justify-end pt-4'>
        <SearchBar />
      </div>

      <div className='grid gap-2 mt-6 grid-cols-4 '>
        <TransactionCard
          title="Total Transaction"
          total={24}
          blueBackground={true}
          link={true}
          Icon={ArrowLeftRight}
        />
        <TransactionCard
          title="Total Income"
          total={20}
          Icon={TrendingUp}
        />
        <TransactionCard
          title="Total Expense"
          total={4}
          Icon={TrendingDown}
        />
        <TransactionCard
          title="This Month vs Last Month"
          total={0}
          Icon={Percent}
        />
      </div>

      <div className='grid grid-cols-6 gap-4 mt-4'>
        <LineCharts
          height={170}
          
        />
        <div className='w-full grid grid-cols-1 gap-4 col-span-2'>
              
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

      <div className='flex gap-8   pt-4  '>

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
