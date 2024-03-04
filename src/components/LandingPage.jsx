import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-0.3" className='w-full h-screen bg-[#F1F1F1] pt-1'>
        <div className='textstructure mt-40 px-16'>
            {["We Create", "Eye-Opening", "Presentations"].map((item, index) =>{
                return (
                    <div className='masker'>
                        <div className='w-fit flex'>
                            {index === 1 && (
                                <motion.div initial={{width: 0}} animate={{width:"9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className='w-[9vw] h-[6vw] rounded-lg -mt-5 mr-2 bg-green-500'></motion.div>
                            )}
                            <h1 className='text-[9vw] uppercase leading-[6.5vw] font-["Founders_Grotesk_X-Condensed"] font-bold'>{item}</h1>
                        </div>
                    </div>
                )
            })}    
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-52 flex justify-between items-center py-2 px-20'>
            {["For public and private companies", "From the first pitch to the IPO"].map((item, index) => (
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-1'>
                <div className='uppercase px-5 py-2 border-[2px] border-zinc-600 rounded-full font-light text-sm'>Start the Project</div>
                <div className='w-10 h-10 rounded-full border-[2px] border-zinc-600 text-xl flex items-center justify-center'>
                    <GoArrowUpRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage