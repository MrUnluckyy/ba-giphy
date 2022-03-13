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
        },
        setGifs(state, action) {
            state.gifs = action.payload
        }
    }
})

export const { getIsReloadingGifs, setGifs } = gifsSlice.actions
export default gifsSlice.reducer