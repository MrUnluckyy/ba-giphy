import { createSlice, current } from "@reduxjs/toolkit";
import { getRandomGifts } from '../api/getGifs';

export const gifsSlice = createSlice({
    name: "gifs",
    initialState: {
        isReloadingGifs: false
    },
    reducers: {
        getIsReloadingGifs(state, action) {
            state.isReloadingGifs = action.payload
        }
    }
})

export const { getIsReloadingGifs } = gifsSlice.actions
export default gifsSlice.reducer