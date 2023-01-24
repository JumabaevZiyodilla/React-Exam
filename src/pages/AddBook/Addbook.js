import { MenuItem, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useRef, useState } from 'react'
import './addbook.scss'
import axios from 'axios'
import { useEffect } from 'react'
import {
  AddBookFileBox,
  AddBookForm,
  AddBookFormBox,
  AddBookFormButton,
  AddBookFormInput,
  AddBookFormInputFile,
  AddBookFormLabel,
  AddBookFormOption,
  AddBookFormSelect,
  AddBookFormTextarea,
  AddBookFormTitle,
  AddBookWrapper,
  Container,
} from '../AddAuthor/AddAuthor.style'
import { useTranslation } from 'react-i18next'
import { t } from 'i18next'

export const Addbook = () => {
  const [genre, setGenre] = useState([])
  const [author, setAuthor] = useState([])
  const [img, setImg] = useState('')

  const { t, i18n } = useTranslation()

  const title = useRef()
  const pages = useRef()
  const year = useRef()
  const price = useRef()
  const selectGenre = useRef()
  const avtor = useRef()
  const descripton = useRef()
  const token = localStorage.getItem('token')
  useEffect(() => {
    axios
      .get(`http://localhost:5000/genre`)
      .then((res) => setGenre(res.data))
      .catch((error) => console.log(error))
  }, [])

  const getAuthors = (genreId) => {
    axios
      .get(`http://localhost:5000/author/genreId/${genreId}`)
      .then((res) => setAuthor(res.data))
      .catch((error) => console.log(error))
  }

  const imgValue = (props) => {
    setImg(props.target.files[0])
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault()

    let formData = new FormData()
    formData.append('title', title?.current.value)
    formData.append('page', pages?.current?.value)
    formData.append('year', year?.current?.value)
    formData.append('price', price?.current?.value)
    formData.append('genre_id', selectGenre?.current?.value)
    formData.append('author_id', avtor?.current?.value)
    formData.append('description', descripton?.current?.value)
    formData.append('image', img)

    axios
      .post('http://localhost:5000/book', formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  console.log(author)
  return (
    <Container className="container">
      <AddBookWrapper>
        <AddBookFileBox></AddBookFileBox>
        <AddBookFormBox>
          <AddBookForm onSubmit={handleFormSubmit} className="addbook-form">
            <AddBookFormTitle>{t('addBook')}</AddBookFormTitle>
            <Stack spacing={2}>
              <AddBookFormInput
                type="text"
                placeholder="Title"
                ref={title}
                required
              />
              <AddBookFormInput
                ref={pages}
                type="number"
                placeholder="Pages"
                required
              />
              <AddBookFormInput
                type="number"
                ref={year}
                placeholder="Year"
                required
              />
              <AddBookFormInput
                type="number"
                ref={price}
                placeholder="Price"
                required
              />
              <AddBookFormSelect
                ref={selectGenre}
                onChange={(evt) => getAuthors(evt.target.value)}
                required
              >
                {genre.map((item, index) => (
                  <AddBookFormOption key={item.index} value={item.id}>
                    {item.name}
                  </AddBookFormOption>
                ))}
              </AddBookFormSelect>
              <AddBookFormSelect ref={avtor} required>
                {author.map((item, index) => (
                  <AddBookFormOption key={item.index} value={item.id}>
                    {`${item.first_name} ${item.last_name}`}
                  </AddBookFormOption>
                ))}
              </AddBookFormSelect>
              <AddBookFormTextarea
                ref={descripton}
                placeholder="Bio"
                required
              />
              <AddBookFormLabel htmlFor="img" className="label">
                Click or drag file to this area to upload
              </AddBookFormLabel>

              <AddBookFormInputFile
                required
                id="img"
                onChange={imgValue}
                className="file"
                type="file"
              />
              <AddBookFormButton type="submit">{t('create')}</AddBookFormButton>
            </Stack>
          </AddBookForm>
        </AddBookFormBox>
      </AddBookWrapper>
    </Container>
  )
}
