"use client"
import React from 'react'
import { BanknoteArrowDown, ChevronLeft, House, Power, Settings, WalletMinimal } from "lucide-react";
import NavigationItem from './NavigationItem';

const Sidebar = () => {
  return (
    <aside className="bg-foreground flex flex-col justify-between min-w-40 h-full rounded-xl px-5 pt-10 pb-6 shadow">

        <div className='relative' >
            <h1 className="font-bold font-space text-xl">My Expense</h1>
            <div className='absolute top-1 -right-9 rotate-45 bg-background rounded-bl-xl w-7 h-7' ></div>
            <button className='
                absolute top-1.5 -right-7.5
                text-foreground cursor-pointer
                transition-all duration-200 ease-out
                hover:scale-110 hover:-translate-x-0.5 hover:text-dark-foreground
            '>
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
  )
}

export default Sidebar
