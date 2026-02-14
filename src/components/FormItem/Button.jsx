import React from 'react'

const Button = ({ 
    children, 
    className = "", 
    ...props 
}) => {
    return (
        <button className={className + ` px-4 py-2 rounded cursor-pointer transition-all mb-4 w-full `} {...props}>
            {children}
        </button>
    )
}

export default Button
