import React from 'react'
import GptSearchBar from './GptSearchBar'
import { background } from '../constants/URL'
import GptMovieSugg from './GptMovieSugg'

const GptSearch = () => {
 
  return (
  <div>
        <div className='absolute -z-10'>
          <img src={background} alt='logo'/>
        </div>
    <GptSearchBar/>
    <GptMovieSugg/>
  </div>
  )
}
export default GptSearch