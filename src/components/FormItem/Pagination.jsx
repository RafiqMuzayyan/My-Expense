"use client"
import React from 'react'
import MiniButton from './MiniButton'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

const Pagination = () => {
    return (
        <div className='flex justify-center items-center gap-1 pt-2 text-black/70'>        
            <MiniButton><ChevronsLeft/></MiniButton>
            <MiniButton><ChevronLeft/></MiniButton>
            <MiniButton>1</MiniButton>
            <MiniButton><ChevronRight/></MiniButton>
            <MiniButton><ChevronsRight/></MiniButton>     
        </div>
    )
}

export default Pagination
