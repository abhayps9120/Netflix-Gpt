import React from 'react'

const VideoTitle = ({title ,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[10%] text-white px-24 absolute bg-gradient-to-r from-black'>
      <h1  className="text-6xl font-extrabold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div >
        <button className='bg-white text-black m-2 px-2 py-2 rounded-sm hover:bg-opacity-30'> ▶Play</button>
        <button className='bg-gray-500 px-2 py-2 text-white bg-opacity-50 rounded-sm'>ℹ️ More Info</button>
      </div>
    </div>
    
  )
}

export default VideoTitle