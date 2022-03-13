import { configureStore } from "@reduxjs/toolkit";

import selectedGifsReducer from './selectedGifs'
import gifsReducer from './gifs'

export default configureStore({
    reducer: {
        selectedGifs: selectedGifsReducer,
        gifs: gifsReducer,
    },
})