import React from 'react'
import { InfiniteMovingCards } from './ui/Infinite'

const Client = () => {
  return (
    <div className='flex flex-col items-center py-20'>
      <div className='flex items-center justify-center flex-col lg:w-[60vw] md:w-[50vw] sm:w-[85vw] text-center z-10 mb-24 mt-28'>
        <h1 className='lg:text-6xl md:text-6xl sm:text-5xl sm:leading-[60px] font-bold mb-10'>Kind words from <span className='text-purple-300'>satisfied clients</span>
        </h1>
      </div>

      <div>
        <InfiniteMovingCards></InfiniteMovingCards>
      </div>
    </div>
  )
}

export default Client