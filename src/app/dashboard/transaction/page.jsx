import AmountColumn from '@/components/dashboard/table/AmountColumn'
import BarrChart from '@/components/dashboard/chart/BarChart'
import SearchBar from '@/components/FormItem/SearchBar'
import SelectInput from '@/components/FormItem/SelectInput'
import ModalForm from '@/components/dashboard/ModalForm'
import { SquarePen, Trash2 } from 'lucide-react'
import React from 'react'
import Pagination from '@/components/dashboard/table/Pagination'

const page = () => {
  const data = [
  { name: '01', income: 4500000, expense: 2200000 },
  { name: '02', income: 3800000, expense: 1800000 },
  { name: '03', income: 5200000, expense: 2500000 },
  { name: '04', income: 2800000, expense: 1500000 },
  { name: '05', income: 6100000, expense: 3200000 },
  { name: '06', income: 3500000, expense: 1900000 },
  { name: '07', income: 4800000, expense: 2400000 },
  { name: '08', income: 4200000, expense: 2100000 },
  { name: '09', income: 5500000, expense: 2800000 },
  { name: '10', income: 3200000, expense: 1600000 },
  { name: '11', income: 6500000, expense: 3500000 },
  { name: '12', income: 4300000, expense: 2300000 },
  { name: '13', income: 5800000, expense: 2900000 },
  { name: '14', income: 3600000, expense: 1700000 },
  { name: '15', income: 7200000, expense: 3800000 },
  { name: '16', income: 3400000, expense: 1800000 },
  { name: '17', income: 5100000, expense: 2600000 },
  { name: '18', income: 6000000, expense: 3100000 },
  { name: '19', income: 4100000, expense: 2200000 },
  { name: '20', income: 5400000, expense: 2700000 },
  { name: '21', income: 4900000, expense: 2500000 },
  { name: '22', income: 4400000, expense: 2300000 },
  { name: '23', income: 6300000, expense: 3300000 },
  { name: '24', income: 3700000, expense: 1900000 },
  { name: '25', income: 6800000, expense: 3600000 },
  { name: '26', income: 4000000, expense: 2100000 },
  { name: '27', income: 5600000, expense: 2800000 },
  { name: '28', income: 5000000, expense: 2600000 },
  { name: '29', income: 7500000, expense: 4000000 },
  { name: '30', income: 6200000, expense: 3200000 },
]


  return (
    <div className='h-full overflow-y-auto no-scrollbar pt-8 px-1'>
      
      <div className='mb-4'>

        {/* header */}
        <div className='flex justify-between items-center mb-4 '>
          <h1 className=' font-semibold text-2xl text-black/50 '>Your Transaction</h1>
          <ModalForm/>
        </div>

        {/* data filter */}
        <div className='flex justify-between items-end mb-4' >
          <div className='flex gap-3  text-black/70'>
            
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
        
      </div>
      <BarrChart data={data}/>
    </div>
  )
}

export default page
