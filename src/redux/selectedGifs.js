import { createSlice, current } from "@reduxjs/toolkit";

export const selectedGifsSlice = createSlice({
    name: "selectedGifs",
    initialState: [],
    reducers: {
        selectGif(state, action) {
            state.push(action.payload)
        },
        unselectGif(state, action) {
            console.log(current(state));
            // TODO: check how it works
            // state = state.filter(item => item.image.id !== action.payload.image.id)
            state.splice(state.findIndex((item) => item.image.id === action.payload.image.id), 1);

        }
    }
})

export const { selectGif, unselectGif } = selectedGifsSlice.actions
export default selectedGifsSlice.reducer