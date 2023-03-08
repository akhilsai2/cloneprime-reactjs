import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const ActionList = moviesList.filter(each => each.categoryId === 'ACTION')
  const ComedyList = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <>
      <div className="bg-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="logo-img"
        />
        <div className="movie-cont">
          <h1 className="head-action">Action Movies</h1>
          <div className="slide">
            <MoviesSlider item={ActionList} />
          </div>
        </div>
        <div className="movie-cont">
          <h1 className="head-action">Comedy Movies</h1>
          <div className="slide">
            <MoviesSlider item={ComedyList} />
          </div>
        </div>
      </div>
    </>
  )
}
export default PrimeVideo
