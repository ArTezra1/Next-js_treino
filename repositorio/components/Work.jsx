import React from 'react'
import { MovingBorder } from './ui/Moving-border'

const Work = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
        <div className='flex items-center justify-center flex-col lg:w-[60vw] md:w-[50vw] sm:w-[85vw] text-center z-10 mb-24 mt-28'>
        <h1 className='lg:text-6xl md:text-6xl sm:text-5xl sm:leading-[60px] font-bold mb-10'>My work <span className='text-purple-300'>experience</span>
        </h1>
      </div>

      {/* <div className='z-10 relative'>
        <MovingBorder
        className="z-10"
        >pep</MovingBorder>
      </div> */}

    </div>
  )
}

export default Work