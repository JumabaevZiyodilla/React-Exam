import React from 'react'

import { Category } from '../Category/Category'
import { AuthorCard } from './AuthorCard/AuthorCard'
import { BookCard } from './BookCard/BookCard'
import { SiteHeader } from './Header/Header'
import { Routes, Route } from 'react-router-dom'
import { Books } from '../Books/Books'
import { BookSingle } from './BookCard/BookSingle/BookSingle'

export const Home = () => {
  return (
    <>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<AuthorCard />} />
        <Route path="/:id" element={<AuthorCard />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookSingle />} />
      </Routes>
    </>
  )
}
