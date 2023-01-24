import React, { useEffect } from 'react'
import {
  Header,
  Container,
  HeaderWrapper,
  HeaderWrapperTitle,
  HeaderWrapperSubTitle,
  HeaderWrapperBox,
  ButtonTheme,
  SelectLang,
  OptionLang,
} from './Header.style.js'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { MenuItem, Menu, Avatar } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import Icon from '@mui/material/Icon'
import { useSelector, useDispatch } from 'react-redux/es/exports'

import { useTranslation } from 'react-i18next'

import { setTheme } from '../../../redux/darkmode/actions.js'
import { tokenReducer } from '../../../redux/token/tokenReducer.js'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const SiteHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const [me, setMe] = useState([])
  const { token } = useSelector((state) => state.tokenReducer)

  const removeTokenHandler = () => {
    localStorage.removeItem('token')
  }
  if (!token.length > 0) {
    navigate('/register')
  }
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
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

  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.themeReducer)

  const changeTheme = () => {
    if (theme === 'dark') {
      dispatch(setTheme('light'))
      localStorage.setItem('theme', 'light')
    } else {
      dispatch(setTheme('dark'))
      localStorage.setItem('theme', 'dark')
    }
  }

  const { t, i18n } = useTranslation()
  return (
    <Header className={theme}>
      <HeaderWrapperTitle className="visually-hidden">
        Kitoblar
      </HeaderWrapperTitle>
      <Container className="container">
        <HeaderWrapper>
          <HeaderWrapperSubTitle>{t('logo')}</HeaderWrapperSubTitle>
          <HeaderWrapperBox>
            

            <NavLink
              className={({ isActive }) =>
                isActive ? 'navlink active' : 'navlink'
              }
              to="/"
            >
              {t('headerLink')}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navlink active' : 'navlink'
              }
              to="/books"
            >
              {t('headerLinkBooks')}
            </NavLink>

            <Box>
              <Avatar
                endicon={<Icon />}
                variant="contained"
                onClick={openMenu}
                src={`http://localhost:5000/${me.image}`}
                alt={me.first_name}
              ></Avatar>
              <Menu
                anchorEl={anchorEl}
                open={open}
                keepMounted
                onClose={handleClose}
              >
                <MenuItem component={NavLink} to="/usercontact">
                  Profile
                </MenuItem>
                <MenuItem component={NavLink} to="/addauthor">
                  Add author
                </MenuItem>
                <MenuItem component={NavLink} to="/addbook">
                  Add book
                </MenuItem>
                <MenuItem onClick={() => removeTokenHandler()}>
                  Log out
                </MenuItem>
              </Menu>
            </Box>
          </HeaderWrapperBox>
        </HeaderWrapper>
      </Container>
    </Header>
  )
}
