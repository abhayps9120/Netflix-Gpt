import { API_Options } from '../constants/URL'
import { useDispatch } from 'react-redux'
import {addMovie} from "../utils/movieSlice"
import { useEffect } from 'react'

export const useNowPlayMovie = () => {
    const dispatch=useDispatch();
    const getNowPlayMovie = async () => {
  
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)
      const json =await data.json();
      console.log(json)
      dispatch(addMovie(json.results))
    }
  
    useEffect(()=> {
      getNowPlayMovie();
    },[])
}