import { createSlice } from "@reduxjs/toolkit";

export const selectedGifsSlice = createSlice({
    name: "selectedGifs",
    initialState: [],
    reducers: {
        selectGif(state, action) {
            state.push(action.payload)
            localStorage.setItem('userGifs', JSON.stringify(state))
        },
        unselectGif(state, action) {
            state.splice(state.findIndex((item) => item.id === action.payload.id), 1);
            localStorage.setItem('userGifs', JSON.stringify(state))
        }
    }
})

export const { selectGif, unselectGif, setGifsFromLocalStorage } = selectedGifsSlice.actions
export default selectedGifsSlice.reducer