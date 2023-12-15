import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movie.nowPlayingMovies)
  const popularMovies = useSelector((store) => store.movie.popularMovies)
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovies)
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies)
  const popularTvshows = useSelector((store) => store.movie.popularTvshows)

  if(!movies) return;

  return (
    <div className='w-screen bg-black'>
      <div className='relative z-20 -mt-72'>
       <MovieList title={"Now Playing"} movies={movies}/> 
       <MovieList title={"Top Rated"} movies={topRatedMovies}/> 
       <MovieList title={"Popular"} movies={popularMovies}/> 
       <MovieList title={"Upcoming"} movies={upcomingMovies}/>  
       <MovieList title={"Popular TV Shows"} movies={popularTvshows}/> 
       <MovieList title={"Popular TV Shows"} movies={popularTvshows}/> 
       <MovieList title={"Popular TV Shows"} movies={popularTvshows}/>  
       <MovieList title={"Popular TV Shows"} movies={popularTvshows}/>   
       </div> 
     </div>
  )
}

export default SecondaryContainer