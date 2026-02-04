import DataCard from '@/components/dashboard/DataCard'
import IncomeExpenseLineChart from '@/components/dashboard/LinesChart'
import { BanknoteArrowDown, WalletCards, WalletMinimal } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='h-full overflow-y-auto no-scrollbar pt-8'>
      {/* header */}
        <div className='flex justify-between items-center mb-4'>
          <h1 className=' font-semibold text-2xl text-black/50'>Report</h1>
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
        <IncomeExpenseLineChart/>
    </div>
  )
}

export default page
