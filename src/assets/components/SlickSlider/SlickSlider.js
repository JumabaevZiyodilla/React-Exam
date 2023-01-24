import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  CategoryCarouselBox,
  CategoryCarouselTitle,
  CategoryCarouselTitleBox,
  Container,
  SectionCategory,
} from './SlickSlider.style'
import './SlickSlider.scss'

export const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const dataArr = [
    'Temuriylar davri',
    'Jadid adabiyoti ',
    'Sovet davri ',
    'Mustaqillik davri',
  ]
  return (
    <Slider {...settings}>
      {dataArr.map((item, index) => (
        <CategoryCarouselBox key={index}>
          <CategoryCarouselTitleBox>
            <CategoryCarouselTitle>{item}</CategoryCarouselTitle>
          </CategoryCarouselTitleBox>
        </CategoryCarouselBox>
      ))}
    </Slider>
  )
}
