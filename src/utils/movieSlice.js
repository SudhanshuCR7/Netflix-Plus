import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name: 'movies',
        initialState: {
            nowPlayingMovies : null,
            mainTrailer : null,
            popularMovies: null,
            upcomingMovies: null,
            topRatedMovies : null,
            popularTvshows : null
        },
        reducers: {
            addNowPlayingMovies(state,action){
                state.nowPlayingMovies = action.payload;
            },
            addMainTrailer(state,action){
                state.mainTrailer = action.payload;
            },
            addPopularMovies(state,action){
                state.popularMovies = action.payload;
            },
            addUpcomingMovies(state,action){
                state.upcomingMovies = action.payload;
            },
            addTopRatedMovies(state,action){
                state.topRatedMovies = action.payload;
            },
            addPopularTvshows(state,action){
                state.popularTvshows = action.payload;
            }
        }
    }  
)

export default movieSlice.reducer;
export const {
    addNowPlayingMovies,
    addMainTrailer,
    addPopularMovies,
    addUpcomingMovies,
    addTopRatedMovies,
    addPopularTvshows} = movieSlice.actions;