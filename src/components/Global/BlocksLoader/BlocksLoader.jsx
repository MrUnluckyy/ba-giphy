import React from 'react'
import './blocks-loader.scss'

const BlocksLoader = () => {
  return (
    <div className='loader-block'>
        <div className="ldr">
            <div className="ldr-blk"></div>
            <div className="ldr-blk an_delay"></div>
            <div className="ldr-blk an_delay"></div>
            <div className="ldr-blk"></div>
        </div>
    </div>
  )
}

export default BlocksLoader