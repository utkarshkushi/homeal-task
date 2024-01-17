import { ChevronDown } from 'lucide-react'
import React from 'react'

const Categories = () => {
    const pagesList  = [{name: 'Shop', id: 1}, {name: 'Pages', id: 2}, {name: 'Offer', id: 2}, {name: 'Blog', id: 2}, {name: 'Contact', id: 2} ]
  return (
    <div className='px-5 py-5 flex items-center'>

        <div className='flex justify-between items-center px-5 rounded-lg w-56 py-4 gap-8 bg-amber-400 cursor-pointer'>
            <h1 className='text-sm font-roboto font-semibold text-white'>All Categories</h1>
            <ChevronDown  color='white'/>
        </div>

        <div className='pages flex gap-2'>
            <div className='flex gap-1 items-center cursor-pointer'>
                <p className='text-[#347758] text-md font-normal font-roboto'>Home</p>
                <ChevronDown  color='#347758'/>
            </div>
            <div className='flex gap-1 items-center cursor-pointer'>
                <p className='hover:text-[#347758] text-md font-normal font-roboto'>Shop</p>
                <ChevronDown  color='#347758'/>
            </div>
            <div className='flex gap-1 items-center cursor-pointer'>
                <p className='hover:text-[#347758] text-md font-normal font-roboto'>Pages</p>
                <ChevronDown  color='#347758'/>
            </div>
            <div className='flex gap-1 items-center cursor-pointer'>
                <p className='hover:text-[#347758] text-md font-normal font-roboto'>Offers</p>
                <ChevronDown  color='#347758'/>
            </div>
            <div className='flex gap-1 items-center cursor-pointer'>
                <p className='hover:text-[#347758] text-md font-normal font-roboto'>Blog</p>
                <ChevronDown  color='#347758'/>
            </div>
            <div className='flex gap-1 items-center cursor-pointer'>
                <p className='hover:text-[#347758] text-md font-normal font-roboto'>Contact</p>
            </div>
        </div>

    </div>
  )
}

export default Categories