'use client'
import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const DropDownCategories = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <div className='flex justify-between items-center px-5 rounded-lg w-56 py-4 gap-8 bg-amber-400 cursor-pointer' onClick={() => setIsOpen((prev) => !prev)}>
            <h1 className='text-sm font-roboto font-semibold text-white'>All Categories</h1>
            {isOpen ? (
                <ChevronUp color='white'/>
            ) : (
                <ChevronDown  color='white'/>
            )}
        </div>
                {isOpen && (
                    <div className='w-56 absolute'>
                        <div className='flex flex-col gap-5 py-5 pl-3 bg-white'>
                            <p className='text-md font-roboto cursor-pointer hover:text-[#347758] hover:border-l-4 hover:border-[#347758] pl-2'>Fresh From Farm</p>
                            <p className='text-md font-roboto cursor-pointer hover:text-[#347758] hover:border-l-4 hover:border-[#347758] pl-2'>Diary Products</p>
                            <p className='text-md font-roboto cursor-pointer hover:text-[#347758] hover:border-l-4 hover:border-[#347758] pl-2'>Poultry</p>
                            <p className='text-md font-roboto cursor-pointer hover:text-[#347758] hover:border-l-4 hover:border-[#347758] pl-2'>Vegan</p>
                        </div>
                    </div>
                )}
        </div>
  )
}

export default DropDownCategories