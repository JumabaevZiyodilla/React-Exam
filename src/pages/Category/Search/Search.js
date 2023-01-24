import React from 'react'
import {
  FormButton,
  FormInputSearch,
  FormSearch,
  FormTitle,
} from './Search.style'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux/es/exports'
import { setTheme } from '../../../redux/darkmode/actions'


export const Search = () => {
  const { t, i18n } = useTranslation()

  const {theme} = useSelector(state => state.themeReducer)
  return (
    <FormSearch className={theme}>
      <FormTitle>{t("search")}</FormTitle>
      <FormInputSearch placeholder={t("searchPlaceholder")} />
      <FormButton>{t("searchButton")}</FormButton>
    </FormSearch>
  )
}
