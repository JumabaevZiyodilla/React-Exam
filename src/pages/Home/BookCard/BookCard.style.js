import styled from '@emotion/styled'
import Naqsh from '../../../assets/img/naqsh.svg'

export const CardBookList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0px;
  padding-left: 0px;
  padding-top: 30px;
  padding-bottom: 120px;
`
export const CardBookItem = styled.li`
  margin-right: 20px;
`
export const CardBookImage = styled.img`
  margin-bottom: 12px;
  border-top-right-radius: 22px;
  border-top-left-radius: 22px;
`
export const CardBookTitle = styled.h2`
  margin: px 0px 8px px;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: #d1b89d;
`

export const CardBookSubTitle = styled.h3`
  margin: 6px 0px 0px 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: var(--black-color);
`
export const CardBookSubText = styled.p`
  margin: 0px;
  font-size: 16px;
  line-height: 24px;
  color: rgba(13, 13, 13, 0.6);
`

export const AuthorYear = styled.p`
  margin: 0px 0px 0px 16px;
  font-size: 16px;
  line-height: 24px;
  color: var(--black-color);
`

export const AuthorCardItem = styled.li`
  width: 295px;
  margin-right: 20px;
  background: #f5f5f5;
  background-image: url(${Naqsh});
  background-repeat: no-repeat;
  background-size: 100px;
  background-position: calc(50% + 97px) calc(50% + 60px);
  border-radius: 22px;
  padding-bottom: 63px;
`
