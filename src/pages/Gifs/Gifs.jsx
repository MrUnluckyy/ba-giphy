import React, { useState, useEffect } from 'react'

import GifItem from '../../components/GifItem/GifItem'

// import { useGetTrendingGifsQuery, useGetRandomGifsQuery } from '../../api/gifs'
import { useSelector, useDispatch } from 'react-redux'

import './gifs.scss'
import Button from '../../components/Button/Button'
import axios from 'axios'

const Gifs = () => {

  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(true)
  const { selectedGifs } = useSelector(state => state)
  
  
  useEffect(() => {

    let i = 0
    let init = []

    const getRandomGifts = () => {
      axios.get('https://api.giphy.com/v1/gifs/random', {
        params: {
          api_key: 'BaC7RwDgyCEimoFGdOcEWLHA0uugOLwU',
        }
      }).then(resp => {
        if(!init.find(item => item.id === resp.data.data.id)) {
          init.push(resp.data.data)
          i++
        }
        if(i < 12) { 
          getRandomGifts()
        } else if (i === 12 ) {
          init.sort((a, b) => {
            return new Date(b.import_datetime) - new Date(a.import_datetime)
          })
          setGifs([...init])
          setLoading(false)
        }
      }).catch(err => {
        console.log(err);
      })
    }

    getRandomGifts();
  },[])

  const checkIfIdInArray = (array, element) => {
    return !!array.find(item => item.id === element.id)
  }

  const generateGifs = async() => {

    let response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=BaC7RwDgyCEimoFGdOcEWLHA0uugOLwU')
    let json = await response.json()
    return json.data
  }

  const handleClick = () => {
    let test = []

    gifs.forEach(gif => {
      if(!checkIfIdInArray(selectedGifs, gif)) {
        test.push(generateGifs())
      } else {
        test.push(gif)
      }
    });
    Promise.all(test.map((item) => {
      return item.data ? item.data : item
    })).then((res) => {
      setGifs([...res])
    })
  }

  return (
    <div>
      <Button onClick={() => handleClick()}>Test</Button>
      <div className='gifs'>
        {
          loading ?
          <h1>loading...</h1>
          :
          gifs.map(gif => {
            return <GifItem key={gif.id} gif={gif} />
          })
        }
      </div>
    </div>
  )
}

export default Gifs