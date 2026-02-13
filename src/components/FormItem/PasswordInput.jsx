"use client"
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'

const PasswordInput = () => {

    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => {
        setShowPassword(prev => !prev)
    }

  return (
    <div className='flex flex-col gap-2 mb-4'>
        <label htmlFor="password" className='text-sm'>Password</label>

        <div className='flex justify-between bg-foreground/30 py-2 px-4 rounded shadow-inner ring-0 outline-0 focus-within:ring-2 focus-within:ring-secondary/30 transition-all'>
            <input 
                type={showPassword ? 'text' : 'password'}
                id="password"
                name='password'
                placeholder='Min 6 Character'
                className='w-full focus:outline-none text-sm'  
            />

            <button
                type='button'
                onClick={togglePassword}
                className='cursor-pointer text-secondary/30'
            >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
        </div>
    </div>
  )
}

export default PasswordInput
