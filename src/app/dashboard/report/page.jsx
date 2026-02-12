import { DataCard, TopTransactionCard } from '@/components/dashboard/Card'
import ExpenseBreakdown from '@/components/dashboard/ExpenseBreakdown'
import LineCharts from '@/components/dashboard/chart/LinesChart'
import SelectInput from '@/components/FormItem/SelectInput'
import { BanknoteArrowDown, WalletCards, WalletMinimal } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='h-full overflow-y-auto no-scrollbar pt-8 px-1'>
        {/* header */}
        <div className='flex justify-between items-center mb-4'>
          <h1 className=' font-semibold text-2xl text-black/50'>Financial Report</h1>
          <SelectInput
            data={[
              { label: "This Month", value: "this-month" },
              { label: "Last Month", value: "last-month" },
              { label: "This Year", value: "this-year" },
            ]}
            name='period'
            id='period'
          />
        </div>

        <div className='w-full grid sm:grid-cols-3 gap-4 mb-4'>
              
          <DataCard
            Icon={WalletCards}
            Title='Balance'
            Amount={10000000}
            
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

        <div className='flex flex-col md:flex-row gap-4  my-4 w-full'>
          <ExpenseBreakdown/>
          <div className='w-full md:w-[55%]'>
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
