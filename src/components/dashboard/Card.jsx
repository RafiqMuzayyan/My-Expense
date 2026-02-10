import  toRupiah  from '@/app/utilities/toRupiah'
import { SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const DataCard = ({
    Icon, 
    IconColor="bg-secondary",
    Title="Title",
    Amount=0
}) => {
    return (
        <div className='bg-white rounded-lg shadow flex gap-2 items-center p-4'>
            <div className={`rounded-full w-10 h-10 flex justify-center items-center text-white ${IconColor}`}>
                <Icon/>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-black/50 text-sm font-semibold'>{Title}</h3>
                <span className='font-semibold text-black/70'>{toRupiah(Amount)}</span>
            </div>
        </div>
  )
}

export const TransactionCard = ({ 
  title, total, link = false, blueBackground = false, Icon = Ban
}) => {
  return (
    <div className={` rounded-lg shadow px-4 py-3 ${blueBackground ? 'bg-foreground ' : 'bg-white text-black/80' } w-full`}>
      <div className='flex w-full justify-between items-center'>
        <span className='font-semibold '>
          {title}
        </span>
        {link && (
          <Link href='/dashboard/transaction'>
            <SquareArrowOutUpRight size={18}/>
          </Link>
        )}
      </div>
      <div className={`flex items-center gap-4 text-7xl font-poppins font-semibold text-black/80 mt-2`}>
        <h1 >{total}</h1>
        <Icon size={60} />
      </div>
    </div>
  )
}

export const TopTransactionCard = ({
    type="Expense",
    time = "",
    contribution = 0,
    item = "",
    category = "",
    amount = 0, 
    date = "",
}) => {
  return (
    <div className='bg-white rounded-xl w-full px-4 py-4 shadow mb-4'>
        <div className=' flex w-full justify-between texst-sm text-black/70 mb-2'>
            <h2 className='font-semibold'>Top {type} In {time}</h2>
            <span className='font-semibold'>{contribution}%</span>
        </div>
        <div className='ms-4 flex w-[70%] justify-between items-center'>
            <div>
                <h1 className='text-xl font-semibold'>{item}</h1>
                <span className='text-sm text-black/60'>{category}</span>
            </div>
            <div className='ms-4 text-end'>
                <h2 className='text-xl font-semibold'>{toRupiah(amount)}</h2>
                <span className='text-xs text-black/50'>{date}</span>
            </div>
        </div>
        
    </div>
  )
}