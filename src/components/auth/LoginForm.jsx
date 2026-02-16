"use client"
import React from 'react'
import BasicInput from '../FormItem/BasicInput'
import PasswordInput from '../FormItem/PasswordInput'
import Button from '../FormItem/Button'

const LoginForm = () => {
    const[message, setMessage] = React.useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.target)
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        const res = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        })
        const resData = await res.json()
        console.log(resData)
        if(!res.ok) {
            setMessage(resData.message || 'Login failed')
            return
        }
        window.location.href = '/dashboard'

    }

    return (
        <form onSubmit={handleSubmit} className={`w-full sm:w-100`}>
            
            <BasicInput
                label='Email Address'
                type='email'
                id='email'
                name='email'
                placeholder='john@gmail.com'
            />

            <PasswordInput/>
            {message && <p className='text-red-500 text-sm'>{message}</p>}
            <Button className='bg-dark-foreground hover:bg-dark-foreground/70 font-poppins text-black/70 font-semibold' type="submit">
                Login
            </Button>
        </form>
    )
}

export default LoginForm
