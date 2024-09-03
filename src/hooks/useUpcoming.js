import { API_Options } from '../constants/URL'
import { useDispatch } from 'react-redux'
import { addUpcoming} from "../utils/movieSlice"
import { useEffect } from 'react'

export const useUpcoming= () => {
    const dispatch=useDispatch();
    const getUpcoming = async () => {
  
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_Options)
      const json =await data.json();
      console.log(json)
      dispatch(addUpcoming(json.results))
    }
  
    useEffect(()=> {
        getUpcoming();
    } , [])
}