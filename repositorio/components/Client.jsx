import React from 'react'
import { InfiniteMovingCards } from './ui/Infinite'
import { companies } from '@/data/items'

const Client = () => {
  return (
    <div className='flex flex-col items-center py-20'>
      <div className='flex items-center justify-center flex-col lg:w-[60vw] md:w-[50vw] sm:w-[85vw] text-center z-10 mb-24 mt-28'>
        <h1 className='lg:text-6xl md:text-6xl text-5xl sm:leading-[60px] font-bold mb-10'>Kind words from <span className='text-purple-300'>satisfied clients</span>
        </h1>
      </div>

      <div>
        <InfiniteMovingCards></InfiniteMovingCards>
      </div>

      <div className='flex flex-wrap gap-10 mt-10 justify-center items-center'>
        {companies.map((item)=>(
          <div
          key={item.id}
          className='flex gap-4 items-center justify-center'
          >
              <img src={item.img} alt="img" className='lg:w-12 md:w-8'/>
              <img src={item.nameImg} alt="nameImg" className='lg:w-24 md:w-16'/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Client