// import React from 'react'
import styled from 'styled-components'
import SearchIcon from '../../../assets/img/search.svg'

export const FormSearch = styled.form`
  position: relative;
  z-index: 3;
  top: -78px;
  width: 100%;
  max-width: 1030px;
  margin: 0 auto;
  padding: 29px 73px;
  background-color: var(--white-color);
  box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`

export const FormTitle = styled.h3`
  margin: 0px 0px 9px 0px;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: #d1b89d;
`
export const FormInputSearch = styled.input`
  width: 100%;
  max-width: 710px;
  margin-right: 14px;
  padding: 12px 0px 12px 27px;
  font-size: 16px;
  line-height: 24px;
  color: rgba(13, 13, 13, 0.3);
  background-color: var(--inputBg-color);
  border: none;
  border-radius: 15px;
`
export const FormButton = styled.button`
  display: inline-flex;
  padding: 12px 42px 12px 42px;
  font-size: 16px;
  line-height: 24px;
  color: #efdac3;
  background-color: #c9ac8c;
  border: none;
  border-radius: 15px;
  &::before {
    width: 19px;
    height: 19px;
    margin-right: 6px;
    background-image: url(${SearchIcon});
    content: '';
  }
`
