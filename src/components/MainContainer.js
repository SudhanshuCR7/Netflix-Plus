import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const movies = useSelector((store) => store.movie.nowPlayingMovies)

  if(!movies) return;

  const mainMovie = movies[0]

  // console.log(mainMovie)
  const {original_title, overview,id} = mainMovie;

  return (
    <div className='pt-[40%] md:pt-0 bg-black'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground id={id}/>
    </div>

  )
}

export default MainContainer