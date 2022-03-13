import React from 'react'

import Button from '../Button/Button'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Info } from '../../assets/icons/info.svg'
import './navigation.scss'

const Navigation = ({ onButtonClick }) => {
  return (
    <nav className='navigation'>
        <Logo />
        <div className='action-container'>
          <div className='info-container'>
            <Info className='info-icon' />
            <span className='info-text'>
                Press <strong>spacebar</strong> to shuffle or
            </span>
          </div>
          <Button onClick={onButtonClick}>Click here</Button>
        </div>
    </nav>
  )
}

export default Navigation