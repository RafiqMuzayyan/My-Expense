"use client"
import MiniButton from '@/components/FormItem/MiniButton'
import SelectInput from '@/components/FormItem/SelectInput'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Page = () => {
    const router = useRouter();

    const getCookieLanguage = () => {
      if (typeof document === "undefined") return "en";

      const match = document.cookie
        .split("; ")
        .find(row => row.startsWith("language="));

      return match ? match.split("=")[1] : "en";
    };

const [language, setLanguage] = useState(getCookieLanguage);

    const changeLanguage = (lang) => {
      document.cookie = `language=${lang}; path=/`;
      setLanguage(lang);
      router.refresh();
    };
    return (
      <div className='pt-8'>
        <div className='flex flex-col  justify-center mb-4'>
           <h1 className=' font-semibold text-2xl text-black/50'>Settings</h1>
          <span className='text-xs text-black/70 font-poppins'>Manage your details and personal preferences hire.</span>
        </div>
        <div className='w-full bg-white rounded-xl shadow p-6'>
          <div className='flex items-center pt-4  border-b border-black/20 '>
            <div className='w-[30%]'>
              <h3 className='font-semibold'>Basics</h3>
            </div>
          </div>
          <div className='flex items-center py-4  border-b border-black/20 text-sm'>
            <div className='w-[30%]'>
              <h3 >Name</h3>
            </div>
            <div className='w-[70%] flex items-center justify-between'>
              <h1>JOhn KInd</h1>
              <MiniButton padding={4} width={40}>Edit</MiniButton>
            </div>
          </div>
           <div className='flex items-center py-4  border-b border-black/20 text-sm'>
            <div className='w-[30%]'>
              <h3 >Email</h3>
            </div>
            <div className='w-[70%] flex items-center justify-between'>
              <h1>john@gmail.com</h1>
              <MiniButton padding={4} width={40}>Edit</MiniButton> 
            </div>
          </div>
           <div className='flex items-center py-4  border-b border-black/20 text-sm'>
            <div className='w-[30%]'>
              <h3 >Password</h3>
            </div>
            <div className='w-[70%] flex items-center justify-between'>
              <h1>************</h1>
                <MiniButton padding={4} width={40}>Edit</MiniButton>
            </div>
          </div>
          <div className='flex items-center pt-6  border-b border-black/20 '>
            <div className='w-[30%]'>
              <h3 className='font-semibold'>Preferences</h3>
            </div>
          </div>
          <div className='flex items-center py-4  border-b border-black/20 text-sm'>
            <div className='w-[30%]'>
              <h3 >Language</h3>
            </div>
            <div className='w-[70%] flex items-center justify-between'>
              <SelectInput
                data={[
                  { label: "English", value: "en" },
                  { label: "Indonesia", value: "id" },
                ]}
                name='language'
                id='language'
                onChange={(e) => changeLanguage(e.target.value)}
                value={language}
              />
            </div>
          </div>
          <div className='flex gap-1 items-center py-4  border-b border-black/20 text-sm'>
            <div className='w-[30%]'>
              <h3 >Date Format</h3>
            </div>
            <div className='w-[70%] flex items-center justify-between'>
              <SelectInput
                data={[
                  { label: "MMM D, YYYY", value: "mmm-d-yyyy" },
                  { label: "D MMMM YYYY", value: "d-mmmm-yyyy" },
                  { label: "DD/MM/YYYY", value: "dd/mm/yyyy" },
                ]}
                name='date-format'
                id='date-format'
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Page
