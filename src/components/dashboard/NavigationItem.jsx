import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavigationItem = ({url, name, Icon}) => {
    const path = usePathname()
    const active = path === url;
    return (
        <>
                <Link 
                    className={`flex gap-4 items-center p-0.75 rounded group ${active ? "bg-dark-foreground" : ""}`} 
                    href={url}

                >
                    <div className={`transition-all rounded p-0.5 ${active ? "bg-secondary  text-white" : "text-secondary bg-white group-hover:bg-secondary group-hover:text-white" }`}>
                        <Icon size={18}/>
                    </div>
                    <h3 className={`transition-all text-[12px] font-semibold ${active ? "text-dark-secondary" : "text-black/50 group-hover:text-dark-secondary"}`}>
                        {name}
                    </h3>
                </Link> 
            

        </>
    )
}

export default NavigationItem
