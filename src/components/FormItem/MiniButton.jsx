import React from 'react'

const MiniButton = ({ children, width = 24, padding = 0 }) => {
  return (
    <button
      style={{ width, padding}}
      className="bg-foreground rounded hover:bg-dark-foreground hover:text-dark-secondary cursor-pointer transition-all text-center font-semibold"
    >
      {children}
    </button>
  )
}

export default MiniButton
