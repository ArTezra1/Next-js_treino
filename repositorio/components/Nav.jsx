import React from 'react'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from 'clsx';
import { Link } from 'lucide-react';

const Nav = () => {

    const [scrollDirection, setScrollDirection] = useState(null);
    const [lastScroll, setLastScroll] = useState(0);
    const [placeholder, setPlaceholder] = useState(0)
    
    useEffect(() => {
        const handle = () => {
            let currentScroll = window.scrollY

            if (currentScroll > lastScroll) {
                setScrollDirection("down")
            } else if (currentScroll < lastScroll) {
                setScrollDirection("up")
            }
            setLastScroll(currentScroll)
            setPlaceholder(1)
        }
        window.addEventListener("scroll", handle)

        return ()=> {
            window.removeEventListener("scroll", handle)
            
        }
        
    }, [lastScroll])


    return (
        <nav className='flex justify-center z-10'>
            {
            scrollDirection == "up" || placeholder == 0 ?
                <motion.div initial={{
                    opacity: 0
                }} animate={{
                    marginTop: 40,
                    transition: { duration: 0.5 },
                    borderRadius: 10,
                    opacity: 1
                }} className="p-5 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 fixed border border-slate-800 border-t-slate-800 border-l-slate-700 lg:w-[50vh] md:w-[70vh] sm:w-[70vh]"
                >
                    <ul className='flex gap-4 text-slate-100 '>
                        <li className='hover:text-slate-300 transition-colors'>
                            <a href="">About</a>
                        </li>
                        <li className='hover:text-slate-300 transition-colors'>
                            <a href="">Projects</a>
                        </li>
                        <li className='hover:text-slate-300 transition-colors'>
                            <a href="">Testimonials</a>
                        </li>
                        <li className='hover:text-slate-300 transition-colors'>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </motion.div> :
                <motion.div initial={{
                    opacity: 1
                }} animate={{
                    marginTop: 0,
                    transition: { duration: 0.5 },
                    borderRadius: 10,
                    opacity: 0
                }} className="p-5 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 fixed border border-slate-800 border-t-slate-800 border-l-slate-700 lg:w-[50vh] md:w-[70vh] sm:w-[70vh]"
                >
                    <ul className='flex gap-4 text-slate-100 '>
                        <li className='hover:text-slate-300 transition-colors'>
                            <a href="">About</a>
                        </li>
                        <li className='hover:text-slate-300 transition-colors'>
                            <a href="">Projects</a>
                        </li>
                        <li className='hover:text-slate-300 transition-colors'>
                            <a href="">Testimonials</a>
                        </li>
                        <li className='hover:text-slate-300 transition-colors'>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </motion.div>
            }

        </nav>
    );
}

export default Nav