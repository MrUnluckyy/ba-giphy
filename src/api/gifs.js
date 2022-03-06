import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const GIPHY_KEY = 'BaC7RwDgyCEimoFGdOcEWLHA0uugOLwU'
const GIF_URL = 'https://api.giphy.com/v1/gifs'
const GIF_LIMIT = 12

const GIFS_HEADERS = {
    'api_key': GIPHY_KEY,
    'limit': GIF_LIMIT
}

const createRequest = (url) => ({ url, params: GIFS_HEADERS })

export const  gifsApi = createApi({
    reducerPath: 'gifsApi',
    baseQuery: fetchBaseQuery({ baseUrl: GIF_URL }),
    endpoints: (builder) => ({
        getTrendingGifs: builder.query({
            query: () => createRequest('/trending')
        }),
        getRandomGifs: builder.query({
            query: () => createRequest('/random')
        })
    })

})

export const {
    useGetTrendingGifsQuery,
    useGetRandomGifsQuery
} = gifsApi
