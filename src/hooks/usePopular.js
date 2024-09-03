import { API_Options } from '../constants/URL'
import { useDispatch } from 'react-redux'
import { addPopular} from "../utils/movieSlice"
import { useEffect } from 'react'

export const usePopular = () => {
    const dispatch=useDispatch();
    const getNowPopular = async () => {
  
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_Options)
      const json =await data.json();
      dispatch(addPopular(json.results))
    }
  
    useEffect(()=> {
      getNowPopular();
    } ,[])
}