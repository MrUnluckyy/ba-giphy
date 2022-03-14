import { useSelector } from 'react-redux'

import GifItem from '../../components/GifItem/GifItem'
import HorizontalBlocksLoader from '../../components/Global/HorizontalBlocksLoader/HorizontalBlocksLoader'

import './gifs.scss'

const Gifs = ({ loading }) => {
  const { gifs } = useSelector(state => state.gifs)
  return (
    <div>
      <div className={`gifs ${loading ? 'loading' : ''}`}>
        {
          loading ? <HorizontalBlocksLoader /> :
            gifs.map((gif, index) => {
              return <GifItem key={`${gif.id}-${index}`} gif={gif} index={index} />
            })
        }
      </div>
    </div>
  )
}

export default Gifs