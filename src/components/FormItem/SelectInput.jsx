import React from 'react'

const SelectInput = ({
    label = "",
    className = "",
    name="",
    id="",
    data=[
        { label: "All", value: "" },
    ],
    ...props
    
}) => {
    return (
        <div className={className + ` flex flex-col gap-2 `}>
            <label htmlFor={id} className='text-sm'>{label}</label>
            <select 
                name={name} 
                id={id}
                className='py-2 px-3 bg-foreground/30 rounded-lg text-sm text-black/80 shadow-inner ring-0 outline-0 focus:ring-2 focus:ring-secondary/30 transition-all '
                {...props}
            >
                {data.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput
