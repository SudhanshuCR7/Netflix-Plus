import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addTopRatedMovies} from "../utils/movieSlice";



const useTopRatedMovies = () => {
    const topRatedMovies = useSelector((store) => store.movie.topRatedMovies)
    const dispatch = useDispatch(); 

    const fetchTopRated = async () => {
       const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
       const json = await data.json();
       dispatch(addTopRatedMovies(json.results))
    }
   
    useEffect(() => {
        !topRatedMovies && fetchTopRated()
    }, [])
}

export default useTopRatedMovies;