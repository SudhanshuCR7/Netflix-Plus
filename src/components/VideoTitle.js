import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen h-screen md:h-auto  aspect-video pt-[20%] px-8 md:px-16 mt-0 md:-mt-24 absolute text-white bg-gradient-to-r from-black'>
    <h1 className='text-lg md:text-4xl font-bold'>{title}</h1>
    <p className='hidden md:inline-block py-6 text-base w-1/4'>{overview}</p>
    <div>
      <button 
          className='bg-white text-black mt-[5%] md:mt-0 p-3 px-12 text-base rounded-lg font-bold hover:bg-opacity-75'>
            Play
      </button>
      <button 
          className='hidden md:inline-block mx-2 bg-gray-500 text-white p-3 px-12 text-base bg-opacity-50 rounded-lg font-bold hover:bg-opacity-75'>
            More Info
      </button>
    </div>
    </div>
  
  )
}

export default VideoTitle