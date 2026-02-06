import toRupiah from '@/app/utilities/toRupiah'
import React from 'react'

const TopTransactionCard = ({
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

export default TopTransactionCard
