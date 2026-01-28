import { BanknoteArrowDown, House, Power, Settings, WalletMinimal } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({ children }) {
    return(
        <section className="flex w-full p-4 h-screen">

            {/* sidebar */}
            <aside className="bg-foreground flex flex-col justify-between w-52 h-full rounded-xl p-8 shadow-sm shadow-black/40">

                <div>
                    <h1 className="font-semibold text-xl">My Expense</h1>
                </div>

                <div className="flex flex-col gap-4">
                    <Link 
                        className="flex gap-4 items-center bg-dark-foreground p-0.75 rounded" 
                        href="/dashboard"

                    >
                        <div className="bg-secondary rounded text-white p-0.5">
                            <House size={20}/>
                        </div>
                        <h3 className="text-sm font-semibold text-blue-950">
                            Dashboard
                        </h3>
                    </Link>
                    <Link 
                        className="flex gap-4 items-center  p-0.75 rounded" 
                        href="/dashboard"

                    >
                        <div className="bg-white rounded text-aecondary p-0.5">
                            <WalletMinimal size={20}/>
                        </div>
                        <h3 className="text-sm font-semibold text-black/50">
                            Income
                        </h3>
                    </Link>
                    <Link 
                        className="flex gap-4 items-center  p-0.75 rounded" 
                        href="/dashboard"

                    >
                        <div className="bg-white rounded text-aecondary p-0.5">
                            <BanknoteArrowDown size={20}/>
                        </div>
                        <h3 className="text-sm font-semibold text-black/50">
                            Expense
                        </h3>
                    </Link>
                    <Link 
                        className="flex gap-4 items-center  p-0.75 rounded" 
                        href="/dashboard"

                    >
                        <div className="bg-white rounded text-aecondary p-0.5">
                            <Settings size={20}/>
                        </div>
                        <h3 className="text-sm font-semibold text-black/50">
                            Settings
                        </h3>
                    </Link>
                </div>

                <div>
                    <h1 className="font-semibold text-blue-950 text-xl mb-4">John Mark</h1>
                    <button className="text-secondary/80 cursor-pointer"><Power size={20}/></button>
                </div>
            </aside>

            {/* content */}
            <div>
                {children}
            </div>

        </section>
    )
}