import { configureStore } from "@reduxjs/toolkit";

import { gifsApi } from '../api/gifs'
import selectedGifsReducer from './selectedGifs'

export default configureStore({
    reducer: {
        [gifsApi.reducerPath]: gifsApi.reducer,
        selectedGifs: selectedGifsReducer
    },
})