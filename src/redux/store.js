import { configureStore } from "@reduxjs/toolkit";

import { gifsApi } from '../api/gifs'
import selectedGifsReducer from './selectedGifs'
import gifsReducer from './gifs'

export default configureStore({
    reducer: {
        [gifsApi.reducerPath]: gifsApi.reducer,
        selectedGifs: selectedGifsReducer,
        gifs: gifsReducer,
    },
})