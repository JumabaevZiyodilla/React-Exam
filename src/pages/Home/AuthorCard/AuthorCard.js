import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { set } from 'react-hook-form'
import { Category } from '../../Category/Category'
import {
  AuthorCardItem,
  AuthorYear,
  CardBookImage,
  CardBookItem,
  CardBookList,
  CardBookSubTitle,
  CardBookTitle,
} from '../BookCard/BookCard.style'
import { Link } from 'react-router-dom'

export const AuthorCard = () => {
  const [value, setValue] = useState(1)
  const [genre, setGenre] = useState([])
  const [card, setCard] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/genre')
      .then((res) => {
        setGenre(res.data)
      })
      .catch((error) => console.log(error))
  }, [])

  const getAuthors = (id) => {
    axios
      .get(`http://localhost:5000/author/genreId/${id}`)
      .then((res) => {
        setCard(res.data)
      })
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    getAuthors(value)
  }, [value])

  const handleChange = (evt) => {
    setValue(+evt.target.attributes.tabIndex.nodeValue)
  }
  console.log(card)
  const imgUrl = 'http://localhost:5000/'
  return (
    <>
      <Category />
      <Box className="container">
        <CardBookTitle>Asosiy Kategoriyalar</CardBookTitle>
        <Box sx={{ width: '715px', mx: 'auto' }}>
          <Tabs value={value} onChange={handleChange}>
            {genre.map((item) => (
              <Tab
                key={item.id}
                value={item.id}
                label={item.name}
                tabIndex={item.id}
                simple-tab={item.id}
              />
            ))}
          </Tabs>
        </Box>
        <CardBookList container spacing={3}>
          {card.map((item) => (
            <Link style={{ textDecoration: 'none' }} to={`/${item.id}`}>
              <AuthorCardItem key={item.id}>
                <CardBookImage
                  src={`${imgUrl}${item.image}`}
                  width="295"
                  height="224"
                />
                <CardBookSubTitle>
                  {item.first_name + ' ' + item.last_name}
                </CardBookSubTitle>
                <AuthorYear>
                  {item.date_of_birth + '-' + item.date_of_death}
                </AuthorYear>
              </AuthorCardItem>
            </Link>
          ))}
        </CardBookList>
        {/* </Box>
          )
        })} */}
      </Box>
    </>
  )
}
