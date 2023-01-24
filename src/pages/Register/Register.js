import React from 'react'
import {
  SectionRegister,
  Container,
  RegisterWrapper,
  RegisterImgBox,
  RegisterImg,
  RegisterFormTitle,
  RegisterFormText,
  RegisterSubmitButton,
} from './Register.style'
import RegisterImage from '../../assets/img/register-img.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Stack } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { addToken, getData } from '../../redux/token/tokenActions'
import { setTheme } from '../../redux/darkmode/actions'
import { useTranslation } from 'react-i18next'
import { tokenReducer } from '../../redux/token/tokenReducer'
export const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const { theme } = useSelector((state) => state.themeReducer)

  const FormStyle = {
    padding: '16px 0px 16px 29px',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#aaaaaa',
    backgroundColor: 'var(--white-color)',
    border: '1px solid #b4b4bb',
    borderRadius: '10px',
  }
  const initialValues = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    first_name: Yup.string().required('Required!'),
    last_name: Yup.string().required('Required!'),
    phone: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required!'),
    password: Yup.string()
      .min(3, 'This is a short password')
      .max(15, 'This is a long password')
      .required('Required!'),
  })
  const onSubmit = (values) => {
    axios
      .post('http://localhost:5000/user/register', {
        first_name: values.first_name,
        last_name: values.last_name,
        phone: values.phone.toString(),
        email: values.email,
        password: values.password,
      })
      .then((data) => {
        if (data.status === 201) {
          JSON.stringify(
            dispatch(addToken(data.data.token)),
            window.localStorage.setItem('token', data.data.token),
          )
          navigate('/')
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <SectionRegister className={theme}>
        <Container className="container">
          <RegisterWrapper>
            <RegisterImgBox>
              <RegisterImg
                width={'500px'}
                height={'500px'}
                src={RegisterImage}
              />
            </RegisterImgBox>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => {
                return (
                  <Form
                    style={{ width: '330px', margin: '75px auto 0px auto' }}
                  >
                    <RegisterFormTitle>{t('signUp')}</RegisterFormTitle>
                    <RegisterFormText>
                      {t('registerAlready')}
                      <Link
                        style={{ textDecoration: 'none', color: '#549FF9' }}
                        to="/login"
                      >
                        Sign in
                      </Link>
                    </RegisterFormText>
                    <Stack spacing={2}>
                      <Field
                        style={FormStyle}
                        name="first_name"
                        type="text"
                        placeholder="First name"
                      />
                      <ErrorMessage
                        component="span"
                        style={{ fontSize: '12px', color: 'red' }}
                        name="first_name"
                      />
                      <Field
                        style={FormStyle}
                        name="last_name"
                        type="text"
                        placeholder="Last name"
                      />
                      <ErrorMessage
                        component="span"
                        style={{ fontSize: '12px', color: 'red' }}
                        name="last_name"
                      />
                      <Field
                        style={FormStyle}
                        name="phone"
                        type="number"
                        placeholder="Phone"
                      />
                      <ErrorMessage
                        component="span"
                        style={{ fontSize: '12px', color: 'red' }}
                        name="phone"
                      />
                      <Field
                        style={FormStyle}
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        component="span"
                        style={{ fontSize: '12px', color: 'red' }}
                        name="email"
                      />
                      <Field
                        style={FormStyle}
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                      <ErrorMessage
                        component="span"
                        style={{ fontSize: '12px', color: 'red' }}
                        name="password"
                      />
                      <RegisterSubmitButton
                        disabled={!formik.dirty || !formik.isValid}
                        type="submit"
                      >
                        Next step
                      </RegisterSubmitButton>
                    </Stack>
                  </Form>
                )
              }}
            </Formik>
          </RegisterWrapper>
        </Container>
      </SectionRegister>
    </>
  )
}
