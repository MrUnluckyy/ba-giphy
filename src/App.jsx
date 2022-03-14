import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getRandomGif } from './api/getGifs'
import { setGifs, getIsReloadingGifs } from './redux/gifs'
import { setGifsFromLocalStorage } from './redux/selectedGifs'

import Navigation from './components/Navigation/Navigation'
import Gifs from './pages/Gifs/Gifs'

import './App.scss'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const { selectedGifs } = useSelector(state => state)
  const { gifs } = useSelector(state => state.gifs)

  useEffect(() => {
    document.addEventListener('keydown', spacebarHandler, false)
    return () => {
      document.removeEventListener('keydown', spacebarHandler, false)
    }
  })

  useEffect(() => {
    const storedGifs = JSON.parse(localStorage.getItem('userGifs'))
    if (storedGifs) {
      dispatch(setGifsFromLocalStorage(storedGifs))
    }
    const loadGifs = () => {
      // TODO: Add a check to see if there are any repetitive gifs
      let data = []

      for (let i = 0; i < 12; i++) {
        let storedGif = storedGifs.find(gif => gif.index === i)
        if (storedGif) {
          data.push(storedGif)
        } else {
          data.push(getRandomGif())
        }
      }
      Promise.all(data.map((item) => {
        return item
      })).then((data) => {
        let sortedData = data.sort((a, b) => (new Date(b.import_datetime) - new Date(a.import_datetime)))
        dispatch(setGifs([...sortedData]))
        setLoading(false)
      })
    }
    loadGifs()
  }, [])

  const spacebarHandler = useCallback((event) => {
    if (event.keyCode === 32) {
      event.preventDefault()
      shuffleGifs()
    }
  })

  const checkIfIdInArray = (array, element) => {
    return !!array.find(item => item.id === element.id)
  }

  const shuffleGifs = () => {
    if (selectedGifs.length === 12) return

    dispatch(getIsReloadingGifs(true))
    let data = []
    gifs.forEach(gif => {
      if (!checkIfIdInArray(selectedGifs, gif)) {
        data.push(getRandomGif())
      } else {
        data.push(gif)
      }
    })
    Promise.all(data.map((item) => {
      return item.data ? item.data : item
    })).then((res) => {
      dispatch(setGifs([...res]))
      dispatch(getIsReloadingGifs(false))
    })
  }
  return (
    <div className="App">
      <Navigation onButtonClick={shuffleGifs} />
      <Gifs loading={loading} />
    </div>
  )
}

export default App
