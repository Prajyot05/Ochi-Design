import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zin-100 flex items-center px-20 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
            <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' className='w-32'></img>
            <button className='absolute left-10 bottom-10 px-5 py-1 text-white rounded-full border-2'>&copy;2019-2022</button>
        </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]'>
                <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' className='w-32'></img>
                <button className='absolute left-4 bottom-10 px-2 py-1 text-white rounded-full uppercase text-sm border-2'>Rating 5.0 on Clutch</button>
            </div>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]'>
                <img src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' className='w-32'></img>
                <button className='absolute left-4 bottom-10 px-2 py-1 text-white rounded-full uppercase text-sm border-2'>Business Bootcamp Alumini</button>
            </div>
        </div>
    </div>
  )
}

export default Cards