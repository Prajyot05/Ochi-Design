import { motion } from 'framer-motion'
import { Power4 } from 'gsap/all'
import React, { useState } from 'react'

function Featured() {
    const [isHovering, setHovering] = useState(false);
    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-2 border-zinc-300 pb-10'>
                <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-5 mt-10'>
                    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className='card-container relative w-1/2 h-[75vh] rounded-xl'>
                        <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2  text-[#CDEA67] text-9xl font-["Founders_Grotesk_X-Condensed"] font-bold leading-none z-[9]'>
                            {"FYDE".split('').map((item, index) => (
                                <motion.span initial={{y: "100%"}} animate={isHovering ? ({y: "0"}) : ({y: "100%"}) } transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.06}} className='inline-block'>{item}</motion.span>
                            ))}
                        </h1>
                        <div className='w-full h-full scale-90 overflow-hidden rounded-xl'>
                            <img className='w-full h-full object-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png'></img>
                        </div>
                    </div>
                    <div className='card-container w-1/2 relative h-[75vh] rounded-xl'>
                        <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2  text-[#CDEA67] text-9xl font-["Founders_Grotesk_X-Condensed"] font-bold leading-none z-[9]'>
                            {/* {"VISE".split('').map((item, index) => (
                                <motion.span initial={{y: "100%"}} animate={isHovering ? ({y: "0"}) : ({y: "100%"}) } transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.06}} className='inline-block'>{item}</motion.span>
                            ))} */}
                        </h1>
                        <div className='w-full scale-90 rounded-xl overflow-hidden h-full'>
                            <img className='w-full h-full object-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured