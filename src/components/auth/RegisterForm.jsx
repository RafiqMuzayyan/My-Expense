import React  from 'react'
import BasicInput from '../FormItem/BasicInput'
import PasswordInput from '../FormItem/PasswordInput'
import Button from '../FormItem/Button'

const RegisterForm = () => {
    
    return (
        <div className='w-full sm:w-150  '>
            <div className='flex justify-between gap-2 lg:gap-4'>
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

            <Button className='bg-dark-foreground hover:bg-dark-foreground/70 font-poppins text-black/70 font-semibold' type="submit">
                Register
            </Button>
        </div>
    )
}

export default RegisterForm
