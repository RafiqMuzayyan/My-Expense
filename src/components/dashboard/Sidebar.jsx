"use client"
import React, { useState } from 'react'
import { BanknoteArrowDown, ChevronLeft, ChevronRight, House, Power, Settings, WalletMinimal } from "lucide-react";
import NavigationItem from './NavigationItem';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <>  
            <button 
                className={`absolute bg-white shadow rounded-e-xl cursor-pointer overflow-hidden transition-all z-0 left-0 ${(isOpen) ? "w-0" : "w-6 "}`}
                onClick={() => setIsOpen(prev => !prev)}
            >
                <ChevronRight/>
            </button>
            <aside className={`bg-foreground flex flex-col justify-between  h-full rounded-xl  pt-10 pb-6  ${(isOpen) ? "w-45 px-5" : "w-0  px-0"} transition-all overflow-hidden z-1`}>

                <div className='relative' >
                    <h1 className="font-bold font-space text-xl">My Expense</h1>
                    <div className='absolute top-1 -right-9 rotate-45 bg-background rounded-bl-xl w-7 h-7' ></div>
                    <button 
                        className='
                            absolute top-1.5 -right-7.5
                            text-foreground cursor-pointer
                            transition-all duration-200 ease-out
                            hover:scale-110 hover:-translate-x-0.5 hover:text-dark-foreground'
                        onClick={() => setIsOpen(prev => !prev)
    }    
                    >
                        <ChevronLeft/>
                    </button>
                </div>

                <div className="flex flex-col gap-6">
                    <NavigationItem
                        url="/dashboard"
                        name="Dashboard"
                        Icon={House}
                    />  
                    <NavigationItem
                        url="/dashboard/income"
                        name="Income"
                        Icon={WalletMinimal}
                    />  
                    <NavigationItem
                        url="/dashboard/expense"
                        name="Expense"
                        Icon={BanknoteArrowDown}
                    />  
                    <NavigationItem
                        url="/dashboard/settings"
                        name="Settings"
                        Icon={Settings}
                    />  
                </div>

                <div>
                    <h1 className="font-semibold text-dark-secondary text-xl mb-4">John Mark</h1>
                    <button className="text-secondary/80 cursor-pointer hover:text-dark-secondary transition-all"><Power size={20}/></button>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
