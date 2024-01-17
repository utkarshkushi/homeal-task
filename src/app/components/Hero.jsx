import React from 'react'

const Hero = () => {
  return (
    
    <div className='bg-[#f9f0e5] px-10 pt-10 flex justify-around gap-[60px] hero-bg'>
        <div>
            <img className='w-[700px] h-[644px]' src="/hero-img.png" alt="hero-img" />
        </div>

        <div className='flex flex-col gap-y-6 pt-10'>
            <img className='w-[320px] h-[120px] relative right-20' src="/natural.png" alt="" />
            <h1 className='text-6xl font-bold font-signika text-[#347758]'>Eat Organic <br /> & Healthy Food</h1>
            <h1 className='text-2xl leading-relaxed text-gray-500'>Eat local, Box contents change weekly to <br /> reflect the season's best</h1>
            <div>
            <button className='px-10 rounded-lg py-4 text-center font-roboto font-bold bg-amber-400 hover:bg-[#347758] hover:text-white transition-all'>
                Shop Now
            </button>
            </div>
        </div>
    </div>

  )
}

export default Hero

