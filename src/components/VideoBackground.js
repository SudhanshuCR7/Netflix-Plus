import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constant'

const VideoBackground = ({id}) => {
  const [trailerId, setTrailerId] =useState(null);

  const movieTrailer = async () => {
     const data  = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_OPTIONS)
     const json = await data.json();

     const trailer = json.results.filter((v) => v.type === "Trailer")
     const mainTrailer = trailer[0];
     setTrailerId(mainTrailer.key)
  }

  useEffect(() => {
   movieTrailer();
  }, [])

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={'https://www.youtube.com/embed/'+ trailerId }
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
}

export default VideoBackground