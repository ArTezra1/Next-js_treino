import React from 'react'
import { PinContainer, PinPerspective } from './ui/PinCard'

import { projects } from '@/data/items'

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col justify-center items-center text-center'>
      <div className='flex items-center justify-center flex-col lg:w-[60vw] md:w-[50vw] sm:w-[85vw] text-center z-10 mb-24'>
        <h1 className='lg:text-6xl md:text-6xl sm:text-5xl sm:leading-[60px] font-bold mb-10'>A small selection of <span className='text-purple-300'>recent projects</span>
        </h1>
      </div>
      <div className='lg:grid grid-cols-2 md:flex sm:flex flex-col items-center justify-center lg:gap-72 sm:gap-60 md:gap-60 mt-10'>
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer className="pb-10">
             <div className='relative flex items-center justify-center lg:w-[40vw] lg:h-[50vh] md:w-[80vw] sm:w-[80vw] overflow-hidden h-[40vh] mb-10 rounded-3xl'>
              <div className='relative w-full h-full overflow-hidden lg:rounded-3xl flex justify-center'
              style={{backgroundColor: "#13162D"}}>
                <img src="/bg.png" alt="bgimg" />
                <img src={item.img} alt="cover"
                className='z-10 absolute bottom-0'
                />
              </div>
             </div>

             <h1 className='font-bold mt-4 mb-2 text-start lg:text-2xl'>
              {item.title}
             </h1>
             
             <p className='text-start text-slate-300 text-sm'>
              {item.des}
             </p>

             <div className='flex justify-between mt-4'>
              <div className='flex w-[250px]'>
                {item.iconLists.map((icon, id)=>(
                  <div
                  key={id}
                  className='p-2 bg-slate-900 rounded-full flex items-center justify-center border border-slate-700 w-10 h-10'
                  >
                    <img
                    src={icon}
                    alt="Icons"
                    ></img>
                  </div>
                ))}
              </div>
              <div className='w-[300px] text-end pr-4'>
                <a href={item.link} className='text-lg font-semibold text-end text-purple-300'>
                  Check Live Site
                </a>
                
              </div>
             </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects