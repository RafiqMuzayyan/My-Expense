import BarrChart from '@/components/dashboard/chart/BarChart'
import SearchBar from '@/components/FormItem/SearchBar'
import SelectInput from '@/components/FormItem/SelectInput'
import ModalForm from '@/components/dashboard/modal/ModalForm'
import React from 'react'
import Table from '@/components/dashboard/table/Table'
import { getLocale } from '@/lib/i18n/getLocale'
import { barChartData } from '@/components/dashboard/table/data'


const page =  async () => {
  
  const t = await getLocale();

  return (
    <div className='h-full overflow-y-auto no-scrollbar pt-8 pb-4 px-1'>
      
      <div className='mb-4'>

        {/* header */}
        <div className='flex flex-col sm:flex-row justify-center  sm:justify-between items-center mb-4 gap-4'>
          <h1 className=' font-semibold text-2xl text-black/50 '>{t.transaction.me}</h1>
          <ModalForm/>
        </div>

        {/* data filter */}
        <div className='flex flex-col-reverse sm:flex-row justify-between items-end mb-4 gap-4' >
          <div className='flex  gap-3  text-black/70'>
            
            <SelectInput
              data={[
                { label: "All", value: "" },
                { label: "Income", value: "income" },
                { label: "Expense", value: "expense" },
              ]}
              name='sort'
              id='sort'
            />
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
          <SearchBar />
        </div>

        {/* table */}
        <Table/>
      </div>
      <BarrChart data={barChartData}/>
    </div>
  )
}

export default page
