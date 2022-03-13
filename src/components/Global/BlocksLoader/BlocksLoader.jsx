import './blocks-loader.scss'

const BlocksLoader = () => {
  return (
    <div className='loader-block'>
        <div className="loader">
            <div className="loader-cube"></div>
            <div className="loader-cube delayed"></div>
            <div className="loader-cube delayed"></div>
            <div className="loader-cube"></div>
        </div>
    </div>
  )
}

export default BlocksLoader