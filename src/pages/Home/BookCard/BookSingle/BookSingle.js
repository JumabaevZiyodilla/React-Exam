import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { setTheme } from '../../../../redux/darkmode/actions'
import { t } from 'i18next'
import axios from 'axios'
import { useSelector } from 'react-redux'
import {
  SingleBookSection,
  Container,
  SingleBookWrapper,
  SingleBookPageBox,
  SingleBookBox,
  SingleBookImg,
  SingleBookText,
  SingleBookDesciption,
  SingleBookTitle,
  SingleBookSubBox,
  SingleBookList,
  SingleBookItem,
  SingleBookListImg,
  SingleBookListText,
} from './BookSingle.style'

export const BookSingle = () => {
  const { id } = useParams()
  console.log(id)
  const [card, setCard] = useState([])
  const { token } = useSelector((state) => state.tokenReducer)
  const [authorBooks, setAuthorBooks] = useState([])
  const imgUrl = 'http://localhost:5000/'
  const getSingleBook = () => {
    axios
      .get(`http://localhost:5000/book/bookId/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => setCard(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getSingleBook()
  }, [])
  const getAuthorId = (id) => {
    axios
      .get(`http://localhost:5000/author/books/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setAuthorBooks(res.data)
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getAuthorId(card.author_id)
  }, [card.author_id])
  console.log(authorBooks)
  return (
    <>
      <SingleBookSection>
        <Container className="container">
          <SingleBookWrapper>
            <SingleBookImg
              src={`${imgUrl}${card.image}`}
              width="505"
              height="681"
            />
            <SingleBookBox>
              <SingleBookPageBox>
                <SingleBookTitle>{card.title}</SingleBookTitle>
                <SingleBookText>Sahifalar soni:</SingleBookText>
                <SingleBookText>Chop etilgan:</SingleBookText>
                <SingleBookText>Kitob narxi:</SingleBookText>
              </SingleBookPageBox>
              <SingleBookSubBox>
                <SingleBookText>{card.page}</SingleBookText>
                <SingleBookText>{card.year}</SingleBookText>
                <SingleBookText>${card.price}</SingleBookText>
              </SingleBookSubBox>
              <div>
                <SingleBookDesciption>To'liq ma'lumot</SingleBookDesciption>
                <SingleBookText>{card.description}</SingleBookText>
              </div>
            </SingleBookBox>
          </SingleBookWrapper>
          <SingleBookListText>Asarlari</SingleBookListText>
          <SingleBookList>
            {authorBooks.map((item) => (
              <SingleBookItem>
                <SingleBookListImg
                  src={`${imgUrl}${item.image}`}
                  width="190"
                  height="283"
                />
                <SingleBookText>{item.title}</SingleBookText>
              </SingleBookItem>
            ))}
          </SingleBookList>
        </Container>
      </SingleBookSection>
    </>
  )
}
