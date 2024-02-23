import React from 'react'
import NatWest from '../assets/NatWest.svg'

const Header = () => {
  return (
    <header className='w-full bg-blue-300 h-[64px] rounded-b-lg flex px-4 justify-evenly items-center'>
      <img src={NatWest} alt='logo' className='sm:w-1/4 h-[80%] w-full object-fit' />
      <div className='bg-slate-50 p-1.5 rounded-full'
        style={{
          boxShadow: '0px 10px 35px -4px rgba(67, 83, 255, 0.15),0px 1.5px 4px -1px rgba(67, 83, 255, 0.2)'
        }}
      >
        <h1 className='sm:text-3xl text-2xl hidden sm:flex font-semibold blue-gradient_text'>NatWest Weather</h1>
      </div>
      {/* <NavLink to='/statewisesummary' className={({isActive})=> isActive ? 'text-white text-2xl font-semibold ' : 'text-black text-2xl font-medium '}>Summary</NavLink> */}
    </header>
  )
}

export default Header