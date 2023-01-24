import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Profile } from './Profile/Profile'
import { Security } from './Security/Security'
import { Settings } from './Settings/Settings'
import { NavLink } from 'react-router-dom'
import {
  UserHeader,
  Container,
  UserNumberSpan,
  RouteBox,
} from './UserContact.style'
import { Box } from '@mui/system'
import './usercontact.scss'
import { setTheme } from '../../redux/darkmode/actions'
import { useSelector } from 'react-redux/es/exports'
import { useTranslation } from 'react-i18next'

export const UserContact = () => {
  const { theme } = useSelector((state) => state.themeReducer)
  const { t, i18n } = useTranslation()
  return (
    <UserHeader className={theme}>
      <Container className="container">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navlinkUser activeUser' : 'navlinkUser'
            }
            to="/usercontact/profile"
          >
            <UserNumberSpan>1</UserNumberSpan>
            {t('profile')}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navlinkUser activeUser' : 'navlinkUser'
            }
            to="/usercontact/security"
          >
            <UserNumberSpan>2</UserNumberSpan>
            {t('security')}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navlinkUser activeUser' : 'navlinkUser'
            }
            to="/usercontact/settings"
          >
            <UserNumberSpan>3</UserNumberSpan>
            {t('settings')}
          </NavLink>
        </Box>
        <RouteBox>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/security" element={<Security />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </RouteBox>
      </Container>
    </UserHeader>
  )
}
