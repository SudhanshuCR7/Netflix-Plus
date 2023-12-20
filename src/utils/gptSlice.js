import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        isGPT: false,
        gptSuggestedMovieNames : null,
        tMDBMoviesResponse: null

    },
    reducers: {
        toggleGPT: (state) => {
            state.isGPT = ! state.isGPT
        },
        addGPTSuggestedMovieNames: (state,action) => {
           state.gptSuggestedMovieNames = action.payload
        },
        addTMDBmoviesResponse: (state,action) => {
          state.tMDBMoviesResponse = action.payload
        },  
        removeMoviesNamesWithTmdbResponse: (state) => {
            state.gptSuggestedMovieNames = null
            state.tMDBMoviesResponse = null
        },
        noGPTview: (state) => {
            state.isGPT = false;
        }
    }
})

export default gptSlice.reducer;
export const {toggleGPT, addTMDBmoviesResponse,addGPTSuggestedMovieNames,removeMoviesNamesWithTmdbResponse,noGPTview} = gptSlice.actions; 