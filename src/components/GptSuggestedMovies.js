import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptSuggestedMovies = () => {

  
  const movieName = useSelector((store) => store.gpt.gptSuggestedMovieNames)
  const tmdbRespone = useSelector((store) => store.gpt.tMDBMoviesResponse)
 
  if(!movieName || !tmdbRespone) return null;
  
  return (
    <div className='p-4 m-4 bg-black text-white opacity-90'>
        {movieName.map( (movie, index) => <MovieList key={movie} title={movie} movies={tmdbRespone[index]}/>)}
    </div>
  )
}

export default GptSuggestedMovies 