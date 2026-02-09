import React  from 'react'
import BasicInput from '../FormItem/BasicInput'
import PasswordInput from '../FormItem/PasswordInput'

const RegisterForm = () => {
    
    return (
        <div className='w-150'>
            <div className='flex justify-between gap-4'>
                <BasicInput
                    label='Full Name'
                    type='text'
                    id='name'
                    name='name'
                    placeholder='John Example'
                />
                <BasicInput
                    label='Email Address'
                    type='email'
                    id='email'
                    name='email'
                    placeholder='john@example.com'
                />
            </div>

            <PasswordInput/>

            <button 
                className='bg-secondary px-4 py-2 rounded text-white cursor-pointer font-semibold hover:bg-secondary/70 transition-all mb-4 w-full'
            >
                Register
            </button>
        </div>
    )
}

export default RegisterForm
