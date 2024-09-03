import React from 'react'
import { imgcdn } from '../constants/URL'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-2">
        <img alt="poster" src={imgcdn+posterPath}></img>
    </div>
  )
}

export default MovieCard