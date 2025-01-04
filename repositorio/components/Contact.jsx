import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Button from './ui/Button'
import { socialMedia } from '@/data/items'
import { GridBackgroundDemo } from './ui/GridBackgroundDemo'

const Contact = () => {
    return (
        <section id='contact' className='flex items-center justify-center flex-col overflow-hidden relative'>
            <div className='z-[-10] absolute h-[60vh] w-screen bg-gradient-to-t from-opacity-100 to-opacity-0'>
                <GridBackgroundDemo></GridBackgroundDemo>
            </div>
            <div className='flex items-center justify-center flex-col lg:w-[60vw] md:w-[50vw] sm:w-[85vw] text-center z-10 mb-16 mt-28'>
                <h1 className='lg:text-5xl md:text-5xl text-4xl leading-[40px] font-bold'>Ready to take <span className='text-purple-300'>your</span> digital presence to the next level?
                </h1>
                <p className='my-6 text-slate-300 font-semibold text-lg'>
                    Reach out to me today and let's discuss how I can help you achieve your goals
                </p>

                <Button className={"py-4 px-6 flex"}>Let's get in touch <ArrowUpRight></ArrowUpRight></Button>
            </div>

            <div className='flex items-center justify-center flex-col gap-8'>
                <p>
                    Copyright © Adrian Hajdin
                </p>

                <div className='flex gap-4'>
                    {socialMedia.map((item) => (
                        <img src={item.img} key={item.id} className='border border-slate-700 rounded-lg p-3 mb-10 cursor-pointer' alt={item.img}>
                        </img>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact