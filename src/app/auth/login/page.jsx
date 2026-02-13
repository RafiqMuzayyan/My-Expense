import LoginForm from '@/components/auth/LoginForm'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen lg:w-fit p-4 lg:p-8'>
      <h1 className='text-xl text-black font-semibold'>My Expense</h1>
      <div className='flex flex-col justify-center h-[95%]'>
        <h1 className='text-xl text-black font-semibold'>Welcome Back</h1>
        <h5 className='text-black/50 text-sm mb-5'>Please enter your detail to log in.</h5>
        <LoginForm/>
        <span className='text-sm'>
          Don&apos;t have an account? <Link href="/auth/register" className='text-secondary'>Sign Up</Link>
        </span>
      </div>
    </div>
  )
}

export default page
