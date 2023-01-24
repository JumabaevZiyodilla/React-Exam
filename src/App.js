import { Routes, Route } from 'react-router-dom'
import { Books } from './pages/Books/Books'
import { Register } from './pages/Register/Register'
import './assets/main.css'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { Languages } from './Languages/Languages'
import { SiteHeader } from './pages/Home/Header/Header'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Addbook } from './pages/AddBook/Addbook'
import { AddAuthor } from './pages/AddAuthor/AddAuthor'
import { UserContact } from './pages/UserContact/UserContact'
import { setTheme } from './redux/darkmode/actions'
import { useSelector, useDispatch } from 'react-redux/es/exports'

function App() {
  i18n.use(initReactI18next).init({
    fallbackLng: localStorage.getItem('lang') || 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: Languages.en },
      uz: { translation: Languages.uz },
      ru: { translation: Languages.ru },
    },
  })

  const { theme } = useSelector((state) => state.themeReducer)
  document.body.classList.add(`${theme}`)
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addbook" element={<Addbook />} />
        <Route path="/addauthor" element={<AddAuthor />} />
        <Route path="/usercontact/*" element={<UserContact />} />
      </Routes>
    </>
  )
}

export default App
