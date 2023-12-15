import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";



const useUpcomingMovies = () => {
    const dispatch = useDispatch(); 

    const fetchUpcoming = async () => {
       const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
       const json = await data.json();
      //  console.log(json.results);
       dispatch(addUpcomingMovies(json.results))
    }
   
    useEffect(() => {
        fetchUpcoming()
    }, [])
}

export default useUpcomingMovies;