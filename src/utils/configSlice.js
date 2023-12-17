import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        userLanguage: 'en'
    },
    reducers: {
        langChange: (state,action) => {
            state.userLanguage = action.payload;
        }
    }
})

export default configSlice.reducer;
export const {langChange} = configSlice.actions;