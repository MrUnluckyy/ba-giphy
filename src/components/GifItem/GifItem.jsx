import React from 'react'

import './gif-item.scss'

import { ReactComponent as Lock } from '../../assets/icons/lock.svg'
import { ReactComponent as Unlock } from '../../assets/icons/unlock.svg'

const GifItem = () => {
  return (
    <div className='gif-item'>
        GifItem
        <div className="footer">
            <Lock className='lock-icon' /> Click to lock
        </div>
    </div>
  )
}

export default GifItem