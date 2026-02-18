
import React from 'react'
import SearchBar from '@/components/FormItem/SearchBar'
import DashboardData from '@/components/dashboard/DashboardData'
import FetchWrapper from '@/components/FetchWrapper'

const page = async () => {

  return (
    <div className='w-full h-full justify-between overflow-y-auto no-scrollbar px-1'>

      {/* searchbar */}
      <div className=' flex w-full justify-end pt-4'>
        <SearchBar />
      </div>
      <FetchWrapper api='/api/dashboard'>
        <DashboardData/>
      </FetchWrapper>
    </div>
  )
}

export default page
