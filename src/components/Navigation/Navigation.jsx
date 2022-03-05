import React from 'react'

import Button from '../Button/Button'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Info } from '../../assets/icons/info.svg'

import './navigation.scss'

const Navigation = () => {
  return (
    <nav className='navigation'>
        <Logo />
        
        <div className='action-container'>
            <Info className='info-icon' />
            <span className='info-text'>
                Press <strong>spacebar</strong> to shuffle or
            </span>
            <Button>Click here</Button>
            

        </div>
    </nav>
  )
}

export default Navigation