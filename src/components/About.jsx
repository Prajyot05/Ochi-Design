import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-speed='-0.2' className='w-full p-20 bg-[#CDEA67] rounded-2xl text-[#212121]'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw] tracking-tight'>
            Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full flex gap-5 mt-10 border-t-[1px] pt-5 border-[#ABC05A]'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach:</h1>
                <button className='pl-6 text-sm pr-5 py-4 uppercase bg-[#212121] mt-5 rounded-full text-white flex items-center gap-8'>
                    Read More
                    <div className='w-2 h-2 bg-white rounded-full'></div>
                </button>
            </div>
            <div className='w-[60%] h-auto bg-red-300 rounded-md overflow-hidden object-cover'>
                <img src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg'></img>
            </div>
        </div>
    </div>
  )
}

export default About