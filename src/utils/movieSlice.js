import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name: 'movies',
        initialState: {
            nowPlayingMovies : null,
            mainTrailer : null
        },
        reducers: {
            addNowPlayingMovies(state,action){
                state.nowPlayingMovies = action.payload;
            },
            addMainTrailer(state,action){
                state.mainTrailer = action.payload;
            }
        }
    }  
)

export default movieSlice.reducer;
export const {addNowPlayingMovies,addMainTrailer} = movieSlice.actions;