import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secondary = () => {
  const movies = useSelector( store => store.movies);
  return (
    movies.nowPlayingMovies && (<div className='bg-black'>
      <div className='-mt-52 p-12 z-20 relative'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.populuarVideo}/>
        <MovieList title={"Top Rated"} movies={movies.topRated}/>
        <MovieList title={"Upcoming"} movies={movies.upcoming}/>
      </div>
    </div>)
  )
}

export default Secondary