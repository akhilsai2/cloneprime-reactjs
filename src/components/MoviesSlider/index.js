import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {item} = props
  const setting = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <Slider {...setting}>
      {item.map(each => (
        <MovieItem item={each} key={each.id} />
      ))}
    </Slider>
  )
}
export default MoviesSlider
