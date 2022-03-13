import React, { useEffect, useState } from 'react'

import './gif-item.scss'

import { ReactComponent as Lock } from '../../assets/icons/lock.svg'
import { ReactComponent as Unlock } from '../../assets/icons/unlock.svg'
import BlocksLoader from '../Global/BlocksLoader/BlocksLoader'

import { useSelector, useDispatch } from 'react-redux'
import { selectGif, unselectGif } from '../../redux/selectedGifs'


const GifItem = ({ gif, index }) => {
    const [isSelected, setIsSelected] = useState(false)
    const { selectedGifs } = useSelector(state => state)
    const { isReloadingGifs } = useSelector(state => state.gifs)

    useEffect(() => {
        if(!!selectedGifs.find(item => item.id === gif.id)) setIsSelected(true)
    }, [])

    const dispatch = useDispatch()

    const handleGifSelection= () => {
        if(isReloadingGifs) return

        isSelected ? dispatch(unselectGif(gif)) : dispatch(selectGif({...gif, index}))
        setIsSelected(!isSelected)
    }
  return (
    <div className={`gif-item ${isSelected && 'selected'} ${isReloadingGifs && 'disable'}`}  onClick={() => handleGifSelection()}>
        {
            isReloadingGifs && !isSelected ? <BlocksLoader /> : ''
        }
        <img src={gif.images.original.url} alt="test" className='gif-image'/>
        <div className='footer-locked'>
            <Lock className='lock-icon' />
        </div>
        <div className="footer">
            {
                isSelected 
                ?
                <>
                    <Unlock className='lock-icon' /> Click to unlock
                </>
                :
                <>
                    <Lock className='lock-icon' /> Click to lock
                </>
            }
        </div>
    </div>
  )
}

export default GifItem