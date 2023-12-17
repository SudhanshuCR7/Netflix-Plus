import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularTvshows from '../hooks/usePopularTvshows';
import { useSelector } from 'react-redux';
import GptView from './GptView';

const Browse = () => {
  const isGPT = useSelector(store => store.gpt.isGPT)

 useNowPlayingMovies();
 usePopularMovies();
 useUpcomingMovies();
 useTopRatedMovies();
 usePopularTvshows();

  return (
    <div>
      <Header/>

      { isGPT ? <GptView/> : 
      <> <MainContainer/>
      <SecondaryContainer/>
       </>}
      
    
    </div>
  )
}

export default Browse