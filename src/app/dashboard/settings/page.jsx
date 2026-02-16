import MiniButton from '@/components/FormItem/MiniButton'
import SelectInput from '@/components/FormItem/SelectInput'
import React from 'react'

const Page = () => {
    
    return (
      <div className='pt-8'>
        <div className='flex flex-col  justify-center mb-4'>
           <h1 className=' font-semibold text-2xl text-black/50'>Settings</h1>
          <span className='text-xs text-black/70 font-poppins'>Manage your details and personal preferences hire.</span>
        </div>
        <div className='w-full bg-white rounded-xl shadow p-6'>
          <div className='flex items-center pt-4  border-b border-black/20 '>
            <div className='w-[30%]'>
              <h3 className='font-semibold'>Basics</h3>
            </div>
          </div>
          <div className='flex items-center py-4  border-b border-black/20 text-sm'>
            <div className='w-[30%]'>
              <h3 >Name</h3>
            </div>
            <div className='w-[70%] flex items-center justify-between'>
              <h1>JOhn KInd</h1>
              <MiniButton padding={4} width={40}>Edit</MiniButton>
            </div>
          </div>
           <div className='flex items-center py-4  border-b border-black/20 text-sm'>
            <div className='w-[30%]'>
              <h3 >Email</h3>
            </div>
            <div className='w-[70%] flex items-center justify-between'>
              <h1>john@gmail.com</h1>
              <MiniButton padding={4} width={40}>Edit</MiniButton> 
            </div>
          </div>
           <div className='flex items-center py-4  border-b border-black/20 text-sm'>
            <div className='w-[30%]'>
              <h3 >Password</h3>
            </div>
            <div className='w-[70%] flex items-center justify-between'>
              <h1>************</h1>
                <MiniButton padding={4} width={40}>Edit</MiniButton>
            </div>
          </div>
          <div className='flex items-center pt-6  border-b border-black/20 '>
            <div className='w-[30%]'>
              <h3 className='font-semibold'>Preferences</h3>
            </div>
          </div>
          <div className='flex items-center py-4  border-b border-black/20 text-sm'>
            <div className='w-[30%]'>
              <h3 >Currency</h3>
            </div>
            <div className='w-[70%] flex items-center justify-between'>
              <SelectInput
                data={[
                  { label: "🇮🇩 IDR", value: "IDR" },
                  { label: "🇺🇸 USD", value: "USD" },
                ]}
                name="currency"
                id="currency"            
              />
            </div>
          </div>
          <div className='flex gap-1 items-center py-4  border-b border-black/20 text-sm'>
            <div className='w-[30%]'>
              <h3 >Date Format</h3>
            </div>
            <div className='w-[70%] flex items-center justify-between'>
              <SelectInput
                data={[
                  { label: "MMM D, YYYY", value: "mmm-d-yyyy" },
                  { label: "D MMMM YYYY", value: "d-mmmm-yyyy" },
                  { label: "DD/MM/YYYY", value: "dd/mm/yyyy" },
                ]}
                name='date-format'
                id='date-format'
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Page
