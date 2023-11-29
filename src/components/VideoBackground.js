import React from 'react'
import {useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({id}) => {
  
  const trailer = useSelector((store) => store.movie?.mainTrailer);

  useMovieTrailer(id)

  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video'
        src={'https://www.youtube.com/embed/'+trailer?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackground;