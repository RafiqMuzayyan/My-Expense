import React from 'react'

const Wrapper = ({ children, size }) => {
  return (
    <>  
        <div className='lg:hidden' style={{ minWidth: size.width }}>{children}</div>
        <div className='hidden lg:block'>{children}</div>
    </>
  )
}

export default Wrapper
