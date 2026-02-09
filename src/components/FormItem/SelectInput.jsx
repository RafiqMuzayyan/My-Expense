import React from 'react'

const SelectInput = ({
    name="",
    id="",
    defaultValue="",
    data=[
        { label: "All", value: "" },
    ],
}) => {
    return (
        <select 
            name={name} 
            id={id}
            className='py-2 px-3 bg-foreground/30 rounded-lg text-sm text-black/80 shadow-inner ring-0 outline-0 focus:ring-2 focus:ring-secondary/30 transition-all'
            defaultValue={defaultValue}
        >
            {data.map((item, index) => (
                <option key={index} value={item.value}>{item.label}</option>
            ))}
        </select>
    )
}

export default SelectInput
