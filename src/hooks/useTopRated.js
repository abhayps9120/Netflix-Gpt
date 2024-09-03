import { API_Options } from '../constants/URL'
import { useDispatch } from 'react-redux'
import { addTopRated} from "../utils/movieSlice"
import { useEffect } from 'react'

export const useTopRated= () => {
    const dispatch=useDispatch();
    const getTopRated = async () => {
  
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_Options)
      const json =await data.json();
      dispatch(addTopRated(json.results))
    }
  
    useEffect(()=> {
        getTopRated();
    } , [])
}