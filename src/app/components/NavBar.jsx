import { Search } from 'lucide-react'
import React from 'react'


const NavBar = () => {
  return (
    // <>
    //     <div className='text-red-400 text-3xl'>
    //         navbar
    //     </div>
    
    // </>
    <div className='flex justify-between items-center px-5 py-5'>
        <div>
            <img className='w-36 h-16' src="/ecolive-logo.png" alt="ecolive-logo" />
        </div>
        <div className='flex gap-4'>
            <div className='flex gap-2 justify-center items-center'>
                <img className='w-8 h-8' src="/call.png" alt="phone" />
                <p className='font-bold cursor-pointer hover:text-[#347758]'>1-800-234-123</p>
            </div>
            <div className='flex border-2 rounded-lg border-slate-300 px-5 py-2 w-[500px]'>
                <input type="text" className='font-roboto focus:outline-none flex-1 text-sm' placeholder='Search Product..' />
                <Search className='w-5 h-5' />
            </div>
        </div>
        <div className='flex gap-3 justify-center items-center'>
            <div className='flex justify-center items-center w-[60px] h-[60px] rounded-[15px] rounded-br-[30px] hover:rounded-br-[15px] hover:bg-[#eef7e3] transition-all bg-[#eef7e3] border'> 
                <img className='w-5 h-5' src="/profile.png" alt="" />
            </div>
            <div className='text-sm font-robot0 font-medium'>
                <p>Hello</p>
                <p className='hover:text-[#347758]'><span className='font-semibold cursor-pointer'>Sign-In</span> or <span className='font-semibold cursor-pointer'>Register</span></p>
            </div>
            <div className='flex justify-center items-center w-[60px] h-[60px] rounded-[15px] rounded-br-[30px] hover:rounded-br-[15px] transition-all bg-[#eaf0ef] border'>
                <img className='w-5 h-5' src="/basket.png" alt="" />
                {/* <div className='rounded-[50%] h-7 w-7 flex justify-center items-center border-2 border-white bg-amber-400 absolute top-7 right-14 '>
                  
                  <p className='text-[#347758] text-xs'>2</p>
                  
                </div> */}
            </div>
            <div className='flex justify-center items-center w-[60px] h-[60px] rounded-[15px] rounded-br-[30px] hover:rounded-br-[15px] transition-all bg-[#fcf3d8] border'>
                <img className='w-5 h-5' src="/basket.png" alt="" />
                <div className='rounded-[50%] h-7 w-7 flex justify-center items-center border-2 border-white bg-amber-400 absolute top-7 right-8 '>
                  
                  <p className='text-[#347758] text-xs'>1</p>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar