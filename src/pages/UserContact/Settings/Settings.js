import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'
import { SettingsSection, Container } from './Settings.style'
import { ProfileTitle, ProfileButton } from '../Profile/Profile.style'
import { setTheme } from '../../../redux/darkmode/actions'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import {
  ButtonTheme,
  OptionLang,
  SelectLang,
} from '../../Home/Header/Header.style'

import { useTranslation } from 'react-i18next'

import Switch, { SwitchProps } from '@mui/material/Switch'

export const Settings = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.themeReducer)

  const [mode, setMode] = useState(false)
  const selectRef = useRef()
  const onSubmit = (evt) => {
    evt.preventDefault()
    localStorage.setItem('lang', selectRef.current.value)
    i18n.changeLanguage(selectRef.current.value)

    if (mode === false) {
      dispatch(setTheme('light'))
      localStorage.setItem('theme', 'light')
    } else {
      dispatch(setTheme('dark'))
      localStorage.setItem('theme', 'dark')
    }
  }
  return (
    <SettingsSection>
      <Container className="container">
        <Box sx={{ width: '712px', mx: 'auto' }}>
          <ProfileTitle>{t('settings')}</ProfileTitle>

          <form onSubmit={onSubmit}>
            <SelectLang ref={selectRef} defaultValue={i18n.language}>
              <OptionLang value="uz">O'zbek</OptionLang>
              <OptionLang value="en">English</OptionLang>
              <OptionLang value="ru">Русский</OptionLang>
            </SelectLang>
            <ProfileTitle style={{ margin: '5px' }} variant="p">
              {t('theme')}
            </ProfileTitle>
            <Switch
              control={<Switch color="primary" />}
              onClick={() => setMode(!mode)}
            />
            <ProfileButton type="submit">{t('saveChanges')}</ProfileButton>
          </form>
        </Box>
      </Container>
    </SettingsSection>
  )
}
