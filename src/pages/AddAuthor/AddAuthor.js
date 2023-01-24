import { MenuItem, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useRef, useState, useEffect } from 'react'
// import './addauthor.scss'
import axios from 'axios'
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
} from './AddAuthor.style'
import { useTranslation } from 'react-i18next'
import { t } from 'i18next'

export const AddAuthor = () => {
  const [img, setImg] = useState(null)
  const [ganre, setGanre] = useState([])

  const firstName = useRef()
  const lastName = useRef()
  const dateOfBirth = useRef()
  const dateOfDeath = useRef()
  const country = useRef()
  const genre = useRef()
  const descripton = useRef()
  const token = localStorage.getItem('token')
  const { t, i18n } = useTranslation()
  useEffect(() => {
    axios
      .get('http://localhost:5000/genre')
      .then((res) => {
        setGanre(res.data)
      })
      .catch((error) => console.log(error))
  }, [])

  const imgValue = (props) => {
    setImg(props.target.files[0])
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault()

    let authorData = new FormData()
    authorData.append('first_name', firstName?.current.value)
    authorData.append('last_name', lastName?.current?.value)
    authorData.append('date_of_birth', dateOfBirth?.current?.value)
    authorData.append('date_of_death', dateOfDeath?.current?.value)
    authorData.append('country', country?.current?.value)
    authorData.append('genre_id', genre?.current?.value)
    authorData.append('bio', descripton?.current?.value)
    authorData.append('image', img)
    console.log(firstName.current.value)
    axios
      .post('http://localhost:5000/author', authorData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  return (
    <Container className="container">
      <AddBookWrapper>
        <AddBookFileBox ></AddBookFileBox>
        <AddBookFormBox >
          <AddBookForm onSubmit={handleFormSubmit} className="addbook-form">
            <AddBookFormTitle>{t("addAuthor")}</AddBookFormTitle>
            <Stack spacing={2}>
              <AddBookFormInput
                type="text"
                placeholder="First name"
                ref={firstName}
              />
              <AddBookFormInput ref={lastName} placeholder="Last name" required />
              <AddBookFormInput
                type="number"
                ref={dateOfBirth}
                placeholder="Date of birth"
                required
              />
              <AddBookFormInput
                type="number"
                ref={dateOfDeath}
                placeholder="Date of death"
                required
              />
              <AddBookFormInput ref={country} placeholder="Country" required />
              <AddBookFormSelect
                ref={genre}
                required
              >
                {ganre.map((item, index) => (
                  <AddBookFormOption key={item.index} value={item.id}>
                    {item.name}
                  </AddBookFormOption>
                ))}
              </AddBookFormSelect>
              <AddBookFormTextarea ref={descripton} placeholder="Bio" required />
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
              <AddBookFormButton type="submit">{t("create")}</AddBookFormButton>
            </Stack>
          </AddBookForm>
        </AddBookFormBox>
      </AddBookWrapper>
    </Container>
  )
}
