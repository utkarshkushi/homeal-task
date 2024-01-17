import { ChevronDown } from 'lucide-react'
import React from 'react'

const Categories = () => {
  return (
    <div className='px-10 py-5 flex justify-between items-center'>

        <div className='flex gap-5'>
        <div className='flex justify-between items-center px-5 rounded-lg w-56 py-4 gap-8 bg-amber-400 cursor-pointer'>
            <h1 className='text-sm font-roboto font-semibold text-white'>All Categories</h1>
            <ChevronDown  color='white'/>
        </div>

        <div className='pages flex gap-2'>
            <div className='flex gap-1 items-center cursor-pointer'>
                <p className='text-[#347758] text-md font-normal font-roboto page-link hover:underline'>Home</p>
                <ChevronDown  color='#347758'/>
            </div>
            <div className='flex gap-1 items-center cursor-pointer'>
                <p className='hover:text-[#347758] text-md font-normal font-roboto page-link hover:underline'>Shop</p>
                <ChevronDown  color='#347758'/>
            </div>
            <div className='flex gap-1 items-center cursor-pointer'>
                <p className='hover:text-[#347758] text-md font-normal font-roboto page-link hover:underline'>Pages</p>
                <ChevronDown  color='#347758'/>
            </div>
            <div className='flex gap-1 items-center cursor-pointer'>
                <p className='hover:text-[#347758] text-md font-normal font-roboto page-link hover:underline'>Offers</p>
                <ChevronDown  color='#347758'/>
            </div>
            <div className='flex gap-1 items-center cursor-pointer'>
                <p className='hover:text-[#347758] text-md font-normal font-roboto page-link hover:underline'>Blog</p>
                <ChevronDown  color='#347758'/>
            </div>
            <div className='flex gap-1 items-center cursor-pointer'>
                <p className='hover:text-[#347758] text-md font-normal font-roboto page-link hover:underline'>Contact</p>
            </div>
        </div>
        </div>

        <div className='flex justify-center items-center gap-3'>
            <img className='w-12 h-8' src="/truck.png" alt="truck img" />
            <p className='text-slate-500 font-xs font-normal font-roboto'>We ship over to 150 plus countries</p>
        </div>

    </div>
  )
}

export default Categories