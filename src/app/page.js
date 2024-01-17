import Image from 'next/image'
import NavBar from './components/NavBar'
import Categories from './components/Categories'


export default function Home() {
  return (
    <>
    <div >
        <NavBar />

        <div className='flex justify-center'> 
        <hr className='w-[95%]' />
        </div>

      <Categories />
      
    </div>
    </>
  )
}
