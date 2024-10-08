import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {
  return (
    <div className=' text-white'>
         <h1 className='font-extrabold text-2xl p-5'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
            <div className='flex' >
                {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
            </div>
        </div>
        
    </div>
  )
}

export default MovieList