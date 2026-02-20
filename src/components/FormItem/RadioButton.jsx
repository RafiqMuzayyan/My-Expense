import React from 'react'

const RadioButton = ({
    name = "",
    id  = "",
    value = "",
    label = "",
    ...option
}) => {
    return (
        <label 
            htmlFor={id}
            className={`flex items-center justify-center gap-2 p-1 md:p-2 border-2 border-black/10 rounded-lg cursor-pointer transition-all has-checked:ring-2
            ${value === 'INCOME' ? 
                'hover:border-succes hover:bg-succes/10 has-checked:border-succes has-checked:bg-succes/10 has-checked:ring-succes/20' : 
                'hover:border-danger hover:bg-danger/10 has-checked:border-danger has-checked:bg-danger/10 has-checked:ring-danger/20' 
            }`}
        >
            <input 
                type="radio" 
                name={name} 
                id={id}
                value={value}
                className='w-4 h-4 text-succes focus:ring-succes'
                {...option}
            />
            <span className='font-medium text-black/80'>{label}</span>
            <span className= {value === 'INCOME' ? 'text-succes' : 'text-danger'}>
                {value === 'INCOME' ? '↑' : '↓'}
            </span>
        </label>
    )
}

export default RadioButton
