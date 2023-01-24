import { Box, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {
  ProfileSection,
  Container,
  ProfileForm,
  ProfileTitle,
  ProfileButton,
} from '../Profile/Profile.style'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useSelector } from 'react-redux/es/exports'
import { tokenReducer } from '../../../redux/token/tokenReducer.js'
import { useNavigate } from 'react-router-dom'

export const Security = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [me, setMe] = useState([])

  const { token } = useSelector((state) => state.tokenReducer)
  if (!token.length > 0) {
    navigate('/register')
  }
  useEffect(() => {
    axios
      .get('http://localhost:5000/user/me', {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => setMe(res.data))
      .catch((error) => console.log(error))
  }, [])

  const initialValues = {
    email: '',
    currentPassword: '',
    newPassword: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Please enter your email'),
    currentPassword: Yup.string().required('Please enter your password.'),
    newPassword: Yup.string().required('Please enter your password.'),
  })
  const onSubmit = (values) => {
    let formData = new FormData()
    formData.append('email', values.email)
    formData.append('currentPassword', values.currentPassword)
    formData.append('newPassword', values.newPassword)

    axios
      .put('http://localhost:5000/user/security', formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  const FormStyle = {
    padding: '16px 0px 16px 29px',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#aaaaaa',
    backgroundColor: 'var(--white-color)',
    border: '1px solid #b4b4bb',
    borderRadius: '10px',
  }
  const currentEmail = me.email
  return (
    <ProfileSection>
      <Container className="container">
        <Box sx={{ width: '712px', mx: 'auto' }}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form>
                  <ProfileTitle>{t('changePassword')}</ProfileTitle>
                  <Stack sx={{ position: 'relative' }} spacing={2}>
                    <Field
                      name="email"
                      style={FormStyle}
                      type="email"
                      value={currentEmail}
                      placeholder="Email"
                    />
                    <ErrorMessage
                      component="span"
                      style={{ fontSize: '12px', color: 'red' }}
                      name="email"
                    />
                    <Field
                      name="currentPassword"
                      style={FormStyle}
                      type="password"
                      placeholder="Current password"
                    />
                    <ErrorMessage
                      component="span"
                      style={{ fontSize: '12px', color: 'red' }}
                      name="currentPassword"
                    />
                    <Field
                      name="newPassword"
                      style={FormStyle}
                      type="password"
                      placeholder="New Password"
                    />
                    <ErrorMessage
                      component="span"
                      style={{ fontSize: '12px', color: 'red' }}
                      name="newPassword"
                    />
                  </Stack>
                  <ProfileButton type="submit">
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
