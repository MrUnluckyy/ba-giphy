import React from 'react'

import GifItem from '../../components/GifItem/GifItem'

import { useGetTrendingGifsQuery } from '../../api/gifs'

import './gifs.scss'

const Gifs = () => {
  const { data, isFetching} = useGetTrendingGifsQuery();
  const gifs = data?.data
  
  return (
    <div className='gifs'>
      {
        isFetching ?
        'loading...'
        :
        gifs.map((gif, index) => {
          return <GifItem key={gif.id} image={gif} index={index} />
        })
      }
    </div>
  )
}

export default Gifs