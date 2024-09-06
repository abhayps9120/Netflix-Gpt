import React from 'react'
import Header from './Header'
import {useNowPlayMovie} from '../hooks/useNowPlayMovie'
import MainContainer from './MainContainer'
import Secondary from './Secondary'
import { usePopular } from '../hooks/usePopular'
import { useTopRated } from '../hooks/useTopRated'
import { useUpcoming } from '../hooks/useUpcoming'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


const Browse = () => {
  const showGptSearch = useSelector( store => store.gpt.showGptSearch);
  useNowPlayMovie();
  usePopular();
  useTopRated();
  useUpcoming();
  return (
    <div >
      <Header/>
      {showGptSearch ? <GptSearch/> :( <><MainContainer /><Secondary /></>) }
    </div> 
    
  )
}

export default Browse