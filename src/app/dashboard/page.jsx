import { DataCard, TransactionCard } from '@/components/dashboard/Card'
import SearchBar from '@/components/FormItem/SearchBar'
import SelectInput from '@/components/FormItem/SelectInput'
import { ArrowLeftRight, BanknoteArrowDown, Percent,   TrendingDown, TrendingUp, WalletCards, WalletMinimal } from 'lucide-react'
import React from 'react'
import LineCharts from '@/components/dashboard/chart/LinesChart'
import Table from '@/components/dashboard/table/Table'



const page = () => {
  const data = [
    { name: "Income", value: 200000, color: "#00c951" },  
    { name: "Expense", value: 80000, color: "#fb2c36" }, 
    { name: "Balance", value: 120000, color: "#3b6bd4" },
  ]
  const balance = data[2].value


  return (
    <div className='w-full h-full justify-between overflow-y-auto no-scrollbar px-1'>

      {/* searchbar */}
      <div className=' flex w-full justify-end pt-4'>
        <SearchBar />
      </div>

      {/* cards */}
      <div className='grid gap-2 mt-6 grid-cols-2 md:grid-cols-4 '>
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
          title="Monthly Comparison"
          total={0}
          Icon={Percent}
        />
      </div>

      {/* chart & data card */}
      <div className='w-full grid grid-cols-1 md:grid-cols-6 gap-4 mt-4'>
        <LineCharts
          height={170}
          
        />
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 md:gap-4 md:col-span-2'>
              
          <DataCard
            Icon={WalletCards}
            Title='This Month Balance'
            Amount={40000}
            className='sm:col-span-2 md:col-span-1'
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

      {/* recent transaction */}
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
              <Table />
            </div>
        </div>

      </div>
    </div>
  )
}

export default page
