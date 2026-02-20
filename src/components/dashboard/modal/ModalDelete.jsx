"use client"
import React, { useState } from 'react'
import { Trash2, AlertTriangle } from 'lucide-react'
import Button from '@/components/FormItem/Button'
import ModalWrapper from './ModalWrapper'

const ModalDelete = ({ data, onClose}) => {
   

    return (
     <ModalWrapper >
        {/* Icon & Header */}
        <div className='flex flex-col items-center mb-6'>
            <div className='w-16 h-16 bg-danger/10 rounded-full flex items-center justify-center mb-4'>
                <AlertTriangle size={32} className='text-danger' />
            </div>
            <h1 className='text-2xl font-bold text-black/80 text-center'>Delete Transaction</h1>
            <p className='text-sm text-black/50 mt-2 text-center'>
                Are you sure you want to delete this transaction?
            </p>
        </div>

        {/* Transaction Info */}
        {data.title && (
            <div className='bg-black/5 rounded-lg p-4 mb-6'>
                <p className='text-sm text-black/50 mb-1'>Transaction name:</p>
                <p className='font-medium text-black/80'>{data.title}</p>
            </div>
        )} 

        {/* Warning Message */}
        <div className='bg-danger/10 border-2 border-danger/20 rounded-lg p-3 mb-6'>
            <p className='text-sm text-danger font-medium'>
                ⚠️ This action cannot be undone
            </p>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-3'>
            <Button onClick={onClose} className='bg-white hover:bg-black/10 border border-black/10 font-semibold'>  
                Cancel
            </Button>
            <Button type="submit" className='bg-danger  hover:bg-danger/85 font-semibold text-white'>  
                Delete
            </Button>
        </div>
     </ModalWrapper>
    )
}

export default ModalDelete