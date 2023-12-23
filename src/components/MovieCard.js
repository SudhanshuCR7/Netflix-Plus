import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'


const MovieCard = ({poster}) => {
  if(!poster) return null;
  
  return (
    <div className='w-40 md:w-44 pr-4'>
        <img alt='poster' src={IMG_CDN_URL+poster}/>
    </div>
  )
}

export default MovieCard