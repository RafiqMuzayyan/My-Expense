import RegisterForm from '@/components/auth/RegisterForm'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen lg:w-fit p-4 lg:p-8'>
      <h1 className='text-xl text-black font-semibold'>My Expense</h1>
      <div className='h-[95%] flex flex-col justify-center '>
        <h1 className='text-xl text-black font-semibold'>Create An Account</h1>
        <h5 className='text-black/50 text-sm mb-5'>Join us today by entering your details below.</h5>
        <RegisterForm/>
        <span className='text-sm'>
          Already have an account? <Link href={'/auth/login'} className='text-secondary'>Log In</Link>
        </span>
      </div>
    </div>
  )
}

export default page
