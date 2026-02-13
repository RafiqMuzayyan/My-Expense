import React from 'react'

const BasicInput = ({
    label = 'label', 
    type = 'text', 
    id = '', 
    name, 
    placeholder = 'placeholder',
    defaultValue = ''
    
}) => {
  return (
    <div className='flex flex-col gap-2 mb-4 w-full'>
        <label htmlFor={id} className='text-sm'>{label}</label>
        <input 
            type={type} 
            id={id} 
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className='bg-foreground/30 py-2 px-4 rounded shadow-inner ring-0 outline-0 focus:ring-2 focus:ring-secondary/30 transition-all text-sm  w-full' 
        />
    </div>
  )
}

export default BasicInput
