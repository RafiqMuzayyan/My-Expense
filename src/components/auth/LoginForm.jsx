import React from 'react'
import BasicInput from '../FormItem/BasicInput'
import PasswordInput from '../FormItem/PasswordInput'
import Button from '../FormItem/Button'

const LoginForm = () => {

    return (
        <div className={`w-full sm:w-100`}>
            
            <BasicInput
                label='Email Address'
                type='email'
                id='email'
                name='email'
                placeholder='john@gmail.com'
            />

            <PasswordInput/>

            <Button className='bg-dark-foreground hover:bg-dark-foreground/70 font-poppins text-black/70 font-semibold' type="submit">
                Login
            </Button>
        </div>
    )
}

export default LoginForm
