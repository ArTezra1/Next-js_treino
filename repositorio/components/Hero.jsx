import React from 'react'

import { Spotlight } from './ui/Spotlight'
import { GridBackgroundDemo } from './ui/GridBackgroundDemo'
import Button from './ui/Button'

const Hero = () => {
    return (
        <div className='h-screen w-screen overflow-hidden relative flex justify-center items-center'>
            <div>
                <Spotlight className={"-top-40 -left-10 md:-top-20 md:-left-32 h-screen"} fill={"white"}></Spotlight>
                <Spotlight className={"top-28 left-80 h-[80vh] w-[80vw]"} fill={"blue"}></Spotlight>
                <Spotlight className={"top-10 left-full h-screen"} fill={"purple"}></Spotlight>
                <Spotlight className={"top-10 left-[1200px] h-screen"} fill={"pink"}></Spotlight>
            </div>
            <div className='z-[-10] absolute h-screen w-screen'>
                <GridBackgroundDemo></GridBackgroundDemo>
            </div>
            <div className='flex items-center justify-center flex-col lg:w-[60vw] md:w-[50vw] w-[85vw] text-center z-10'>
                <p className='uppercase text-slate-300 mb-4 text-sm'>Dynamic Web Magic with Next.js</p>
                <h2 className='lg:text-6xl md:text-6xl text-5xl sm:leading-[60px] font-bold mb-10'>Transforming Concepts into Seamless <span className='text-purple-300'>User Experiences</span></h2>
                <p className='mb-10 text-2xl'>Hi! I'm Arthur, a Next.js Developer based in Brasil.</p>
                <div>
                    <Button></Button>
                </div>
            </div>
        </div>
    )
}

export default Hero