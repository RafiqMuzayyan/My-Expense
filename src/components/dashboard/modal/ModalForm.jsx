"use client"
import React, { useState } from 'react'
import BasicInput from '../../FormItem/BasicInput'
import { Plus } from 'lucide-react'
import Button from '@/components/FormItem/Button'
import SelectInput from '@/components/FormItem/SelectInput'
import { categories } from '../table/data'
import ModalWrapper from './ModalWrapper'
import RadioButton from '@/components/FormItem/RadioButton'
import { useApi } from '@/libs/Hooks/useApi'
import { parseFormData } from '@/utilities/parseFormData'

const ModalForm = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { request, loading, error } = useApi()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = parseFormData(e.target, {
            numberFields: ["amount"],
        })

        await request({
            url: "/api/transactions",
            method: "POST",
            body: data,
            redirectTo: "/dashboard", 
            option: {
                credentials: 'include'
            }
        })
    }
    return (
    <>  
        <button 
            className='flex items-center px-3 py-1.5 bg-white shadow rounded-lg gap-3 text-sm  sm:ml-8 cursor-pointer'
            type='button'
            onClick={() => setIsOpen(prev => !prev)}
        >
            <Plus size={18}/> 
            <span>Add Transaction</span>
        </button>
        {isOpen && (
        <ModalWrapper onSubmit={handleSubmit}>
            {/* Header */}
            <div className='mb-6'>
                <h1 className='text-2xl font-bold text-black/80'>Add Transaction</h1>
                <p className='text-sm text-black/50 mt-1'>Fill in the details below</p>
            </div>

            {/* Form */}
            <div className=''>
                {/* Transaction Name */}
                <div className='grid grid-cols-2 gap-4'>
                    <BasicInput 
                        label='Transaction' 
                        id='transaction'
                        placeholder='e.g., Grocery shopping'
                        name={"title"}
                    />
                    <SelectInput
                        name="category"
                        id="category"
                        defaultValue=""
                        label="Category"
                        data={categories}
                        className='w-full'
                    />
                </div>

                {/* Amount and Date Row */}
                <div className='grid grid-cols-2 gap-4'>
                    <BasicInput 
                        type='number' 
                        label='Amount' 
                        id='amount'
                        placeholder='0'
                        name={"amount"}
                    />
                    <BasicInput 
                        type='date' 
                        label='Date'
                        name = "date"
                        id='date'
                    />
                </div>
                
                <div className='flex flex-col gap-2'>
                    <label htmlFor="detail">Detail</label>
                    <textarea 
                    name="detail" 
                    id="detail"
                    className='w-full bg-foreground/30 py-2 px-4 rounded shadow-inner ring-0 outline-0 focus:ring-2 focus:ring-secondary/30 transition-all text-sm mb-4'></textarea>
                </div>

                {/* Type Selection */}
                <div>
                    <label className='block text-sm font-medium text-black/80 mb-3'>
                        Type
                    </label>
                    <div className='grid grid-cols-2 gap-3'>
                        <RadioButton
                            id='income'
                            name='type'
                            value='INCOME'
                            label='Income'
                        />
                        <RadioButton
                            id='expense'
                            name='type'
                            value='EXPENSE'
                            label='Expense'
                        />
                    </div>
                </div>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Action Buttons */}
            <div className='flex gap-3 mt-6'>
                {loading ?
                    <p>Loading</p>
                :   
                    <><Button className='bg-white border border-black/10 hover:bg-black/10  text-black/70 font-semibold' type="button" onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                    <Button className='bg-dark-foreground hover:bg-dark-foreground/70  text-black/70 font-semibold' type="submit">
                        Add
                    </Button></>
                }
                
            </div>
        </ModalWrapper>
        )}
    </>
          
      )
}

export default ModalForm
