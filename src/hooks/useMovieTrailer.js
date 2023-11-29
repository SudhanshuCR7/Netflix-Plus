import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addMainTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (id) => {
    
    const dispatch = useDispatch();

    const movieTrailer = async () => {
        const data  = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
   
        const trailer = json.results.filter((v) => v.type === "Trailer")
        const mainTrailer = trailer[0];
        dispatch(addMainTrailer(mainTrailer));
     }
   
     useEffect(() => {
      movieTrailer();
     }, [])
}

export default useMovieTrailer;