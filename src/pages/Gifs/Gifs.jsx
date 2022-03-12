import React, { useState, useEffect, useCallback } from 'react'

import GifItem from '../../components/GifItem/GifItem'
import HorizontalBlocksLoader from '../../components/Global/HorizontalBlocksLoader/HorizontalBlocksLoader'

import { useSelector, useDispatch } from 'react-redux'

import './gifs.scss'
import { getRandomGif } from '../../api/getGifs'

import { getIsReloadingGifs } from '../../redux/gifs'


const Gifs = () => {

  const [gifsData, setGifsData] = useState([])
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const { selectedGifs } = useSelector(state => state)

  useEffect(() => {
    document.addEventListener('keydown', spacebarHandler, false);
    return () => {
      document.removeEventListener('keydown', spacebarHandler, false);
    };
  })
  
  useEffect(() => {
    const loadGifs = () => {
      // TODO: Add a check to see if there are any repetitive gifs
      let data = []
      for(let i = 0; i < 12; i++) {
        data.push(getRandomGif())
      }
  
      Promise.all(data.map((item) => {
        return item
      })).then((data) => {
        setGifsData([...data])
        setLoading(false)
      })
    }

    loadGifs()
  },[])

  // TODO: Add useEffect to watch state change so it can shuffle items

  const spacebarHandler = useCallback((event) => {
    if(event.keyCode === 32) {
      event.preventDefault()
      handleClick()
    }
  });

  const checkIfIdInArray = (array, element) => {
    return !!array.find(item => item.id === element.id)
  }

  const handleClick = () => {
    if(selectedGifs.length === 12) return;
    dispatch(getIsReloadingGifs(true))

    let data = []
    gifsData.forEach(gif => {
      if(!checkIfIdInArray(selectedGifs, gif)) {
        data.push(getRandomGif())
      } else {
        data.push(gif)
      }
    });
    Promise.all(data.map((item) => {
      return item.data ? item.data : item
    })).then((res) => {
      setGifsData([...res])
      dispatch(getIsReloadingGifs(false))
    })
  }

  return (
    <div>
      <div className={`gifs ${loading ? 'loading' : ''}`}>
        {
          loading
          ?
            <HorizontalBlocksLoader />
          :
            gifsData.map(gif => {
              return <GifItem key={gif.id} gif={gif} />
            })
        }
      </div>
    </div>
  )
}

export default Gifs