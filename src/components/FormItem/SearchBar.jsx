"use client"
import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = ({
    width = 'sm:w-65'  
}) => {

    return (
        <div className='w-full sm:w-fit flex gap-1 items-center bg-foreground/30 rounded-xl px-4 py-1.5 focus-within:ring-2 focus-within:ring-secondary/50 transition-all shadow-inner'>
          <input type="text" placeholder='Search' className={`text-sm outline-0 w-full ${width}`}/>
          <button 
            className='cursor-pointer text-secondary/50'>
            <Search size={20}/>
          </button>
        </div>
    )
}

export default SearchBar
