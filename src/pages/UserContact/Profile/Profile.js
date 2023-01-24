import { Stack, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import {
  ProfileSection,
  Container,
  ProfileForm,
  ProfileTitle,
  ProfileButton,
  ProfileImageLabel,
  ProfileImageInput,
  ProfileFormInput,
} from './Profile.style'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { setTheme } from '../../../redux/darkmode/actions'
import { tokenReducer } from '../../../redux/token/tokenReducer'
import { useSelector, useDispatch } from 'react-redux/es/exports'

export const Profile = () => {
  const { t, i18n } = useTranslation()

  const FormStyle = {
    padding: '16px 0px 16px 29px',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#aaaaaa',
    backgroundColor: 'var(--white-color)',
    border: '1px solid #b4b4bb',
    borderRadius: '10px',
  }

  const [img, setImg] = useState('')

  const { token } = useSelector((state) => state.tokenReducer)

  const imgValue = (props) => {
    setImg(props.target.files[0])
  }

  const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Please enter your first name.'),
    lastName: Yup.string().required('Please enter your last name.'),
    phone: Yup.string().required('Please enter your  phone number.'),
  })

  const onSubmit = (values) => {
    let formData = new FormData()
    formData.append('first_name', values.firstName)
    formData.append('last_name', values.lastName)
    formData.append('phone', values.phone)
    formData.append('image', img)

    axios
      .put('http://localhost:5000/user/account', formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  return (
    <ProfileSection>
      <Container className="container">
        <Box sx={{ width: '712px', ml: 'auto' }}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form>
                  <ProfileTitle>{t('myProfile')}</ProfileTitle>
                  <Stack sx={{ position: 'relative' }} spacing={2}>
                    <Field
                      name="firstName"
                      style={FormStyle}
                      placeholder="First Name"
                    />
                    <ErrorMessage
                      component="span"
                      style={{ fontSize: '12px', color: 'red' }}
                      name="firstName"
                    />
                    <Field
                      name="lastName"
                      style={FormStyle}
                      placeholder="Last Name"
                    />
                    <ErrorMessage
                      component="span"
                      style={{ fontSize: '12px', color: 'red' }}
                      name="lastName"
                    />
                    <Field
                      name="phone"
                      style={FormStyle}
                      type="number"
                      placeholder="Phone"
                    />
                    <ErrorMessage
                      component="span"
                      style={{ fontSize: '12px', color: 'red' }}
                      name="phone"
                    />
                    <ProfileImageLabel htmlFor="img" />
                    <Field
                      name="img"
                      style={{ display: 'none' }}
                      onChange={imgValue}
                      type="file"
                      id="img"
                    />
                  </Stack>
                  <ProfileButton
                    // disabled={!formik.dirty || !formik.isValid}
                    type="submit"
                  >
                    {t('saveChanges')}
                  </ProfileButton>
                </Form>
              )
            }}
          </Formik>
        </Box>
      </Container>
    </ProfileSection>
  )
}
