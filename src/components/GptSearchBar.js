import React from 'react'
import lang from '../constants/Lang'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang)
  
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='bg-black  w-1/2 grid grid-cols-12'>
            <input className= "p-4 m-4 col-span-9 border-black" type="text" placeholder={lang[langKey].gptSearchPlaceholder}></input>
            <button className='py-1 px-4 col-span-3 bg-red-700 text-white'>
              {lang[langKey].search}
            </button>
        </form>
        
 
    </div>
  )
}

export default GptSearchBar

