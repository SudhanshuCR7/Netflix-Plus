import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        isGPT: false
    },
    reducers: {
        toggleGPT: (state) => {
            state.isGPT = ! state.isGPT
        }              
    }
})

export default gptSlice.reducer;
export const {toggleGPT} = gptSlice.actions; 