import React from 'react'

const ModalWrapper = ({
    children, 
    onSubmit, 
    style = "w-full h-full fixed top-0 left-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50",
    ...option
}) => {
    return (
        <div className={style} {...option.parrent}>
            <form onSubmit={onSubmit} className='bg-white rounded-xl py-4 px-6 w-full max-w-md mx-4 shadow-2xl' {...option.form} >
                {children}
            </form>
        </div> 
    )
}

export default ModalWrapper
