"use client"
import React from 'react'
import BasicInput from '../FormItem/BasicInput'
import PasswordInput from '../FormItem/PasswordInput'
import Button from '../FormItem/Button'
import { useApi } from '@/libs/Hooks/useApi'
import { parseFormData } from '@/utilities/parseFormData'

const LoginForm = () => {
    const { request, loading, error } = useApi()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const data = parseFormData(e.target)

        await request ({
            url: '/api/auth/login',
            method: 'POST',
            body: data,
            redirectTo: '/dashboard',
            option: {
                credentials: 'include'
            }
        })

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
            {error && <p className='text-red-500 text-sm mb-2'>{error}</p>}
            <Button className='bg-dark-foreground hover:bg-dark-foreground/70 font-poppins text-black/70 font-semibold' type="submit">
                Login
            </Button>
        </form>
    )
}

export default LoginForm
