import React from 'react'
import BasicInput from '../FormItem/BasicInput'
import PasswordInput from '../FormItem/PasswordInput'

const LoginForm = () => {

    return (
        <div className={`w-full lg:w-100`}>
            
            <BasicInput
                label='Email Address'
                type='email'
                id='email'
                name='email'
                placeholder='john@gmail.com'
            />

            <PasswordInput/>

            <button 
                className='bg-secondary px-4 py-2 rounded text-white cursor-pointer font-semibold hover:bg-secondary/70 transition-all mb-4 w-full'
            >
                Login
            </button>
        </div>
    )
}

export default LoginForm
