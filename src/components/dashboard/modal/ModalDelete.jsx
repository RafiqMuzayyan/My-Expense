"use client"
import React, { useState } from 'react'
import { Trash2, AlertTriangle } from 'lucide-react'

const ModalDelete = ({ id,  onClose}) => {
   

    return (
      <>  
          <div className='w-full h-full fixed top-0 left-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50'>
              <div className='bg-white rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl'>
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
                  {/* {transactionName && ( */}
                      <div className='bg-black/5 rounded-lg p-4 mb-6'>
                          <p className='text-sm text-black/50 mb-1'>Transaction name:</p>
                          <p className='font-medium text-black/80'></p>
                      </div>
                  {/* )} */}

                  {/* Warning Message */}
                  <div className='bg-danger/10 border-2 border-danger/20 rounded-lg p-3 mb-6'>
                      <p className='text-sm text-danger font-medium'>
                          ⚠️ This action cannot be undone
                      </p>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-3'>
                      <button 
                          type='button'
                          className='flex-1 px-4 py-1 md:py-2 border-2 border-black/10 rounded-lg font-medium text-black/80 hover:bg-black/5 transition-colors cursor-pointer'
                          onClick={onClose}
                      >
                          Cancel
                      </button>
                      <button 
                          type='button'
                          className='flex-1 px-4 py-1 md:py-2 bg-danger rounded-lg font-medium text-white hover:bg-danger/90 transition-colors shadow-lg shadow-danger/30 cursor-pointer'
                          
                      >
                          Delete
                      </button>
                  </div>
              </div>
          </div>     
      </>
    )
}

export default ModalDelete