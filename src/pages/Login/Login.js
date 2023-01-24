import React from 'react'
import {
  SectionRegister,
  Container,
  RegisterWrapper,
  RegisterImgBox,
  RegisterImg,
  RegisterForm,
  RegisterFormTitle,
  RegisterFormText,
  RegisterSubmitButton,
  RegisterInput,
} from './Login.style.js'
import LoginImage from '../../assets/img/login-img.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Stack } from '@mui/system'
import { useSelector } from 'react-redux'
import axios from 'axios'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux'
import { addToken } from '../../redux/token/tokenActions'
import { useTranslation } from 'react-i18next'
import { setTheme } from '../../redux/darkmode/actions.js'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { theme } = useSelector((state) => state.themeReducer)
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
  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required!'),
    password: Yup.string()
      .min(3, 'This is a short password')
      .max(15, 'This is a long password')
      .required('Required!'),
  })
  const onSubmit = (values) => {
    console.log(values)
    axios
      .post('http://localhost:5000/user/login', {
        email: values.email,
        password: values.password,
      })
      .then((data) => {
        console.log(data)
        if (data.status === 201) {
          JSON.stringify(
            dispatch(addToken(data.data.token)),
            window.localStorage.setItem('token', data.data.token),
          )
          navigate('/')
        }
      })
      .catch((error) => console.log(error))
    console.log(values)
  }
  return (
    <>
      <SectionRegister className={theme}>
        <Container className="container">
          <RegisterWrapper>
            <RegisterImgBox>
              <RegisterImg width={'500px'} height={'500px'} src={LoginImage} />
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
                    <RegisterFormTitle>{t('signIn')}</RegisterFormTitle>
                    <RegisterFormText>
                      {t('loginAlready')}
                      <Link
                        style={{ textDecoration: 'none', color: '#549FF9' }}
                        to="/register"
                      >
                        {t('signUp')}
                      </Link>
                    </RegisterFormText>
                    <Stack spacing={2}>
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
                      <RegisterSubmitButton type="submit">
                        {t('nextStep')}
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
