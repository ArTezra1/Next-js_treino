import React from 'react'
import { Button, MovingBorder } from './ui/Moving-border'
import { workExperience } from '@/data/items'
import clsx from 'clsx'

const Work = () => {
  return (
    <section className='flex flex-col items-center justify-center md:px-24 p-4'>
      <div className='flex items-center justify-center flex-col lg:w-[60vw] md:w-[50vw] sm:w-[85vw] text-center z-10 mb-16 mt-28'>
        <h1 className='lg:text-5xl md:text-5xl text-5xl leading-[60px] font-bold'>My work <span className='text-purple-300'>experience</span>
        </h1>
      </div>

      <div className='flex flex-col gap-10 lg:w-[90vw] md:w-[80vw] sm:w-[80vw] md:grid md:grid-cols-2'>

        {workExperience.map((item) => (
          <div
          key={item.id}
          >
            <Button duration={Math.floor(Math.random() * 10000) + 10000} rx='30%' ry='30%' className={clsx("py-8 px-10", item.className)}>
              <div className='flex flex-col md:flex-row items-center text-start md:gap-10 md:h-[120px]'>
                <img src={item.thumbnail} alt={item.thumbnail} 
                className='w-16 md:w-24 mb-4'
                />

                <div className='flex flex-col gap-4'>
                  <h2 className='text-2xl font-bold'>
                    {item.title}
                  </h2>
                  <p className='font-semibold text-slate-300'>
                    {item.desc}
                  </p>
                </div>
              </div>
            </Button>
          </div>
        ))}
      </div>


    </section>
  )
}

export default Work