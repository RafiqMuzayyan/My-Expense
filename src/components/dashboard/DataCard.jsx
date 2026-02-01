import  toRupiah  from '@/app/utilities/toRupiah'
import React from 'react'

const DataCard = ({
    Icon, 
    IconColor="bg-secondary",
    Title="Title",
    Amount=0
}) => {
    return (
        <div className='bg-white rounded shadow flex gap-2 items-center p-4'>
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

export default DataCard
