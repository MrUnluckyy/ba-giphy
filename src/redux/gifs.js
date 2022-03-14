import { createSlice } from "@reduxjs/toolkit"

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