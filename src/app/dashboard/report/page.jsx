import DataCard from '@/components/dashboard/Card/DataCard'
import ExpenseBreakdownCard from '@/components/dashboard/Card/ExpenseBreakdownCard'
import TopTransactionCard from '@/components/dashboard/Card/TopTransactionCard'
import LineCharts from '@/components/dashboard/chart/LinesChart'
import { BanknoteArrowDown, WalletCards, WalletMinimal } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='h-full overflow-y-auto no-scrollbar pt-8'>
        {/* header */}
        <div className='flex justify-between items-center mb-4'>
          <h1 className=' font-semibold text-2xl text-black/50'>Financial Report</h1>
          <select 
              name="sort-by" 
              id="sort-by"
              className='py-1.5 px-3 bg-white rounded-2xl text-sm font-semibold shadow'
              defaultValue={"none"}

            >
              <option value="">Recent</option>
              <option value="">opsi 2</option>
              <option value="">opsi 3</option>
              <option value="">opsi 4</option>
            </select>
        </div>

        <div className='w-full grid grid-cols-3 gap-4 mb-4'>
              
          <DataCard
            Icon={WalletCards}
            Title='Balance'
            Amount={40000}
          />
          <DataCard
            Icon={WalletMinimal}
            IconColor='bg-succes'
            Title='Income'
            Amount={82.24}
          />
          <DataCard
            Icon={BanknoteArrowDown}
            IconColor='bg-danger'
            Title='Expense'
            Amount={200.86}
          />
          
        </div>

        <LineCharts/>

        <div className='flex gap-4  my-4 w-full'>
          <ExpenseBreakdownCard/>
          <div className='w-[55%]'>
            <TopTransactionCard
              time='January'
              contribution={34}
              item='Smart TV 55 inch'
              category='Electronics'
              amount={500000}
              date='22/7/2026'
            />
            <TopTransactionCard
              type='Income'
              time="January"
              contribution={45}
              item="Gaji Bulanan"
              category="Salary"
              amount={7500000}
              date="25/7/2026"
            />

          </div>
        </div>
    </div>
  )
}

export default page
