import React from 'react'

const Features = () => {
    const items = [
        {
            id: 1,
            description: `Eating locally grown foods has many benefits`,
            title: "Curated Products",
            link: '/milk.png'
        },
        {
          id: 2,
          description: 'Made with passion by 300+ curators across.',
          title: "Handmade",
          link: '/strawberries.png'
      },
      {
        id: 3,
        description: 'Eat local, consume local, closer to nature',
        title: "100% natural",
        link: '/lemon.png'
    },
    {
      id: 4,
      description: 'Free shipping is valid for orders 50$ and more',
      title: "Free shipping ",
      link: '/truck-2.png'
  },

    ]
  return (
    <div className='border-2 border-slate-200 rounded-2xl px-5 py-10 mx-10 my-10 flex justify-center items-center'>
        {/* <div className='flex w-[350px] gap-2 justify-center items-center border-r-2 border-slate-200'>
          <div>
          <img className='w-16 h-16' src="/milk.png" alt="" />
          </div>
          <div>
            <p className='text-xl font-signika text-[#347758] font-bold '>Curated Products</p>
            <p className='text-md font-roboto text-gray-500 font-normal '>Eating locally grown foods <br /> has many benefits</p>
          </div>
        </div> */}
        {items.map((ele, ind) => {
          if(ind !== 3){
            return (
              <div key={ele.id} className='flex gap-2 justify-center items-center border-r-2 border-slate-200 px-10 '>
          <div>
          <img className='w-[60px] h-[60px]' src={ele.link} alt="" />
          </div>
          <div>
            <p className='text-xl font-signika text-[#347758] font-bold '>{ele.title}</p>
            <p className='text-md font-roboto text-gray-500 font-normal w-[200px] '>{ele.description}</p>
          </div>
        </div>
            )
          }
          else{
            return (
              <div key={ele.id} className='flex gap-2 justify-center items-center  px-10 '>
          <div className='hover:scale-90 transition-all cursor-pointer'>
          <img className='w-[60px] h-[60px]' src={ele.link} alt="" />
          </div>
          <div>
            <p className='text-xl font-signika text-[#347758] font-bold '>{ele.title}</p>
            <p className='text-md font-roboto text-gray-500 font-normal w-[200px] '>{ele.description}</p>
          </div>
        </div>
            )
          }
        })}
    </div>
  )
}

export default Features