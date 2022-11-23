import React from 'react'

function flag() {
  return (
          <div className='w-screen h-screen'>
        <div className='bg-red-500 sm:bg-black md:bg-white lg:bg-red-500 h-1/3' />
        <div className='bg-white sm:bg-red-500 md:bg-blue-500 lg:bg-blue-500 h-1/3 flex items-center justify-center text-7xl'>
          <div className='flex sm:hidden z-10'>Hungary</div>
          <div className='hidden sm:flex md:hidden z-10'>Germany</div>
          <div className='hidden md:flex lg:hidden z-10'>Russia</div>
          <div className='hidden lg:flex z-10'>Armenia</div>
        </div>
        <div className='bg-green-500 sm:bg-yellow-500 md:bg-red-500 lg:bg-yellow-500 h-1/3' />
      </div>
  )
}

export default flag