import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch(); 

    const fetchNowPlaying = async () => {
       const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS)
       const json = await data.json();
      //  console.log(json.results);
       dispatch(addNowPlayingMovies(json.results))
    }
   
    useEffect(() => {
      fetchNowPlaying()
    }, [])
}

export default useNowPlayingMovies;