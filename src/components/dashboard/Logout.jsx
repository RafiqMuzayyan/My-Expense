import { Power } from 'lucide-react'
import React, { useState } from 'react'
import ModalWrapper from './modal/ModalWrapper'
import Button from '../FormItem/Button'

const Logout = () => {
    const [isOpen, setIsOpen] = useState(false)
     const handleSubmit = async (e) => {
        e.preventDefault()
        
        const res = await fetch('http://localhost:5000/api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })

        if(!res.ok) {
            return
        }

        window.location.href = '/auth'

    }
    return (
        <>
            <button className="text-secondary/80 cursor-pointer hover:text-dark-secondary transition" onClick={() => setIsOpen(prev => !prev)}>
                <Power size={20} />
            </button>
            {isOpen && (
                <ModalWrapper onSubmit={handleSubmit}>
                    <div className='flex flex-col items-center mb-6'>
                      <h1 className='text-2xl font-bold text-black/80 text-center'>Confirmation</h1>
                      <p className='text-sm text-black/50 mt-2 text-center'>
                          Are you sure you want to Log Out
                      </p>
                    </div>
                    {/* Action Buttons */}
                    <div className='flex gap-3'>
                      <Button onClick={() => setIsOpen(false)} className='bg-white hover:bg-black/10 border border-black/10 font-semibold'>  
                          Cancel
                      </Button>
                      <Button type="submit" className='bg-danger  hover:bg-danger/85 font-semibold text-white' >  
                          Log Out
                      </Button>
                  </div>
                </ModalWrapper>
            )}
        </>
    )
}

export default Logout
