import React from 'react'
import BasicInput from '../FormItem/BasicInput'

const FormTransaction = () => {
    return (
        <div className='w-full h-full fixed top-0 left-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50'>
            <div className='bg-white rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl'>
                {/* Header */}
                <div className='mb-6'>
                    <h1 className='text-2xl font-bold text-black/80'>Add Transaction</h1>
                    <p className='text-sm text-black/50 mt-1'>Fill in the details below</p>
                </div>

                {/* Form */}
                <div className='space-y-4'>
                    {/* Transaction Name */}
                    <BasicInput 
                        label='Transaction' 
                        placeholder='e.g., Grocery shopping'
                    />

                    {/* Amount and Date Row */}
                    <div className='grid grid-cols-2 gap-4'>
                        <BasicInput 
                            type='number' 
                            label='Amount' 
                            placeholder='0'
                        />
                        <BasicInput 
                            type='date' 
                            label='Date'
                        />
                    </div>

                    {/* Type Selection */}
                    <div>
                        <label className='block text-sm font-medium text-black/80 mb-3'>
                            Type
                        </label>
                        <div className='grid grid-cols-2 gap-3'>
                            <label 
                                htmlFor='income'
                                className='flex items-center justify-center gap-2 p-3 border-2 border-black/10 rounded-lg cursor-pointer transition-all hover:border-succes hover:bg-succes/10 has-checked:border-succes has-checked:bg-succes/10 has-checked:ring-2 has-checked:ring-succes/20'
                            >
                                <input 
                                    type="radio" 
                                    name='type' 
                                    id='income'
                                    value='income'
                                    className='w-4 h-4 text-succes focus:ring-succes'
                                />
                                <span className='font-medium text-black/80'>Income</span>
                                <span className='text-succes'>↑</span>
                            </label>
                            
                            <label 
                                htmlFor='expense'
                                className='flex items-center justify-center gap-2 p-3 border-2 border-black/10 rounded-lg cursor-pointer transition-all hover:border-danger hover:bg-danger/10 has-checked:border-danger has-checked:bg-danger/10 has-checked:ring-2 has-checked:ring-danger/20'
                            >
                                <input 
                                    type="radio" 
                                    name='type' 
                                    id='expense'
                                    value='expense'
                                    className='w-4 h-4 text-danger focus:ring-danger'
                                />
                                <span className='font-medium text-black/80'>Expense</span>
                                <span className='text-danger'>↓</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-3 mt-6'>
                    <button 
                        type='button'
                        className='flex-1 px-4 py-2.5 border-2 border-black/10 rounded-lg font-medium text-black/80 hover:bg-black/5 transition-colors'
                    >
                        Cancel
                    </button>
                    <button 
                        type='submit'
                        className='flex-1 px-4 py-2.5 bg-secondary rounded-lg font-medium text-white hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/30'
                    >
                        Add Transaction
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FormTransaction