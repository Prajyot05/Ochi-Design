import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.02" className='w-full py-10 bg-[#004D43] text-white rounded-2xl'>
      <div className='text border-t-2 border-b-2 border-[#507C74] flex gap-10 whitespace-nowrap overflow-hidden'>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[25vw] leading-none -mb-[7vw] pt-3 pr-20 uppercase font-semibold font-["Founders_Grotesk_X-Condensed"]'>We are Ochi</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[25vw] leading-none -mb-[7vw] pt-3 pr-20 uppercase font-semibold font-["Founders_Grotesk_X-Condensed"]'>We are Ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee