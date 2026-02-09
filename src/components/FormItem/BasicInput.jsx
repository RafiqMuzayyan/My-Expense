import React from 'react'

const BasicInput = ({
    label = 'label', 
    type = 'text', 
    id, 
    name, 
    placeholder = 'placeholder'
}) => {
  return (
    <div className='flex flex-col gap-2 mb-4 w-full'>
        <label htmlFor={id} className='text-sm'>{label}</label>
        <input 
            type={type} 
            id={id} 
            name={name}
            placeholder={placeholder}
            className='bg-foreground/50 py-2 px-4 rounded shadow-inner text-sm focus:outline-secondary w-full' 
        />
    </div>
  )
}

export default BasicInput
