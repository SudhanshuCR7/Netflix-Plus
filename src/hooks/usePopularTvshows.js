import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addPopularTvshows } from "../utils/movieSlice";



const usePopularTvshows = () => {
    const popularTvshows = useSelector((store) => store.movie.popularTvshows)
    const dispatch = useDispatch(); 

    const fetchPopularTvshows = async () => {
       const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_OPTIONS)
       const json = await data.json();
       dispatch(addPopularTvshows(json.results))
    }
   
    useEffect(() => {
        !popularTvshows && fetchPopularTvshows()
    }, [])
}

export default usePopularTvshows;