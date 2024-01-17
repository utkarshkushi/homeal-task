'use client'
import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const DropDownHome = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        
            <div className='flex gap-2 items-center' onClick={() => setIsOpen((prev) => !prev)} >
            <h1 className='text-[#347758] text-md font-normal font-roboto page-link hover:underline'>Home</h1>
            {isOpen ? (
                <ChevronUp color='#347758'/>
            ) : (
                <ChevronDown  color='#347758'/>
            )}
            </div>
        
                {isOpen && (
                    <div className='w-56 absolute'>
                        <div className='flex flex-col gap-5 py-5 pl-3 bg-white'>
                            <p className='text-md text-gray-400 font-roboto cursor-pointer hover:text-[black]'>Fresh From Farm</p>
                            <p className='text-md text-gray-400 font-roboto cursor-pointer hover:text-[black]'>Diary Products</p>
                            <p className='text-md text-gray-400 font-roboto cursor-pointer hover:text-[black]'>Poultry</p>
                            <p className='text-md text-gray-400 font-roboto cursor-pointer hover:text-[black]'>Vegan</p>
                        </div>
                    </div>
                )}
        </div>
  )
}

export default DropDownHome