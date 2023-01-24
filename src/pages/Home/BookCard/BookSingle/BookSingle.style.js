import styled from '@emotion/styled'

export const SingleBookSection = styled.section``

export const Container = styled.div``

export const SingleBookWrapper = styled.div`
  display: flex;
`

export const SingleBookImg = styled.img`
  margin-right: 64px;
`
export const SingleBookBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`
export const SingleBookTitle = styled.h3`
  margin: 0px 0px 12px 0px;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
  color: #d1b89d;
`
export const SingleBookSubBox = styled.div`
  margin-top: 55px;
`
export const SingleBookPageBox = styled.div``

export const SingleBookText = styled.p`
  font-size: 20px;
  line-height: 30px;
  color: var(--black-color);
`
export const SingleBookDesciption = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  color: #c9ac8c;
  &::after {
    width: 510px;
    height: 2px;
    margin-left: 32px;
    background-color: #d1b89d;
    content: '';
  }
`

export const SingleBookListText = styled.p`
  margin: 100px 0px 30px 0px;
  font-size: 31px;
  line-height: 46px;

  color: #d1b89d;
`
export const SingleBookList = styled.ul`
  display: flex;
  width: 1240px;
  overflow-x: scroll;
  margin: 0px;
  padding: 0px;
  list-style: none;
`
export const SingleBookItem = styled.li`
  margin-right: 20px;
`
export const SingleBookListImg = styled.img``
