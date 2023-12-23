import React from 'react'
import {useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { IMG_CDN_URL } from '../utils/constant';

const VideoBackground = ({id}) => {
  
  const trailer = useSelector((store) => store.movie?.mainTrailer);

  const nowPlaying = useSelector((store) => store.movie.nowPlayingMovies)

  const mainMovie = nowPlaying[0]

  console.log(mainMovie.backdrop_path)

  useMovieTrailer(id)

  return (
    <>
      <div className='inline-block md:hidden'>
      <img alt='poster' src={IMG_CDN_URL+mainMovie.backdrop_path}/>
      </div>
      <div className='hidden md:inline-block w-screen'>
      {
        <iframe className='w-screen aspect-video'
        src={'https://www.youtube.com/embed/'+trailer?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      }
      </div>
    </>
   
  );
}

export default VideoBackground;