import React from 'react'
import Header from './Header'
import {useNowPlayMovie} from '../hooks/useNowPlayMovie'
import MainContainer from './MainContainer'
import Secondary from './Secondary'
import { usePopular } from '../hooks/usePopular'
import { useTopRated } from '../hooks/useTopRated'
import { useUpcoming } from '../hooks/useUpcoming'


const Browse = () => {

 
  useNowPlayMovie();
  usePopular();
  useTopRated();
  useUpcoming();
  return (
    <div >
      <Header/>
      <MainContainer/>
      <Secondary/>
    </div> 
    
  )
}

export default Browse