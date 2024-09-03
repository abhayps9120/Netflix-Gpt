import { API_Options } from '../constants/URL'
import {useEffect} from 'react'
import { addTrailer } from '../utils/movieSlice'
import { useDispatch } from 'react-redux'

const useTrailer = (movieId) => {
    const dispatch =useDispatch();
    const getMovieVideo=async ()=>{
      const x=movieId
      const data = await fetch("https://api.themoviedb.org/3/movie/"+x.movieId+"/videos?language=en-US", API_Options)
      const json = await data.json()
      
      const filterData =json.results.filter((video) => video.type==="Trailer"); // It is because it give many trailer options
      const trailer =filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailer(trailer))
    }
  
    useEffect(() => {
        getMovieVideo()
    },[])
}

export default useTrailer