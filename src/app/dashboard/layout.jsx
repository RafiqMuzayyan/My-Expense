import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
    return(
        <section className="flex w-screen p-0 lg:p-4 h-screen ">

            {/* sidebar */}
            <Sidebar/>

            {/* content */}
            <div className="w-full h-full p-2 sm:p-0">
                {children}
            </div>

        </section>
    )
}