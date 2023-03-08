import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl} = item
  // console.log(thumbnailUrl)
  return (
    <Popup
      modal
      trigger={
        <div className="movie-cont">
          <img src={thumbnailUrl} alt="thumbnail" className="movie-thumbnail" />
        </div>
      }
      className="popup-content"
    >
      {close => (
        <div className="video-cont">
          <div className="close-cont">
            <button
              className="button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
          </div>
          <div className="pop-cont">
            <ReactPlayer url={videoUrl} />
          </div>
        </div>
      )}
    </Popup>
  )
}
export default MovieItem
