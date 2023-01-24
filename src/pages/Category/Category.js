import React from 'react'
import { useSelector } from 'react-redux'
import { SlickSlider } from '../../assets/components/SlickSlider/SlickSlider'
import { Container, SectionCategory } from './Category.style'
import { Search } from './Search/Search'
import { setTheme } from '../../redux/darkmode/actions'

export const Category = () => {
  const { theme } = useSelector((state) => state.themeReducer)
  return (
    <SectionCategory className={theme}>
      <Container className="container">
        <SlickSlider />
        <Search />
      </Container>
    </SectionCategory>
  )
}
