import React from 'react'
import { PinContainer, PinPerspective } from './ui/PinCard'

import { projects } from '@/data/items'

const Projects = () => {
  return (
    <section id='projects' className='flex items-center justify-center pb-36 w-full flex-col'>
      <div className='flex items-center justify-center flex-col lg:w-[60vw] md:w-[50vw] sm:w-[85vw] text-center z-10 mb-24'>
        <h2 className='lg:text-6xl md:text-6xl sm:text-5xl sm:leading-[60px] font-bold mb-10'>A small selection of <span className='text-purple-300'>recent projects</span></h2>
        </div>
        <div className='grid grid-cols-2 gap-32'>
         {projects.map(({title, des, img, iconLists, link, id,})=>(
            <PinContainer
            key={id}>
              <PinPerspective
              img={img}
              title={title}
              des={des}
              >
              </PinPerspective>
            </PinContainer>
         ))}
        </div>
    </section>
  )
}

export default Projects