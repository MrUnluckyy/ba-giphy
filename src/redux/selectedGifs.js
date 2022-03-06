import { createSlice } from "@reduxjs/toolkit";

export const selectedGifsSlice = createSlice({
    name: "selectedGifs",
    initialState: [],
    reducers: {
        selectGif(state, action) {
            state.push(action.payload)
        },
        unselectGif(state, actions) {
            state.filter(item => item.id !== actions.payload.id)
        }
    }
})

export const { selectGif, unselectGif } = selectedGifsSlice.actions
export default selectedGifsSlice.reducer