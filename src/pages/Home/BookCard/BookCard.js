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

import {
  CardBookImage,
  CardBookItem,
  CardBookList,
  CardBookSubTitle,
  CardBookTitle,
} from './BookCard.style'
import { Link } from 'react-router-dom'

export const BookCard = () => {
  const [value, setValue] = useState(1)
  const [genre, setGenre] = useState([])
  const [card, setCard] = useState([])
  const [author, setAuthor] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/genre')
      .then((res) => {
        setGenre(res.data)
      })
      .catch((error) => console.log(error))
  }, [])

  const getProducts = async (id) => {
    axios
      .get(`http://localhost:5000/book/genreId/${id}`)
      .then((res) => {
        setCard(res.data)
      })
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    getProducts(value)
  }, [value])
  const getAuthor = async (id) => {
    axios
      .get(`http://localhost:5000/author/genreId/${id}`)
      .then((res) => {
        setAuthor(res.data)
      })
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    getAuthor(value)
  }, [value])

  useEffect(() => {
    getProducts(value)
  }, [value])
  console.log(author)
  const handleChange = (evt) => {
    setValue(+evt.target.attributes.tabIndex.nodeValue)
  }

  const imgUrl = 'http://localhost:5000/'
  return (
    <>
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
        {card.map((item, index) => {
          return (
            <Box
              p={'40px 20px'}
              key={index}
              role="tabpanel"
              hidden={value !== item.id}
              index={item.id}
            >
              <CardBookList container spacing={3}>
                {card.map((item) => (
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={`/books/${item.id}`}
                  >
                    <CardBookItem key={item.id}>
                      <CardBookImage
                        src={`${imgUrl}${item.image}`}
                        width="190"
                        height="283"
                      />
                      <CardBookSubTitle>{item.title}</CardBookSubTitle>
                      {author.map((item) => (
                        <CardBookSubTitle style={{fontWeight: "400"}} key={item.id}>
                          {item.first_name + ' ' + item.last_name}
                        </CardBookSubTitle>
                      ))}
                    </CardBookItem>
                  </Link>
                ))}
              </CardBookList>
            </Box>
          )
        })}
      </Box>
    </>
  )
}
