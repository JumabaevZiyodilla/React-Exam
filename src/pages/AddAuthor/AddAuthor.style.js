import styled from '@emotion/styled'
import File from '../../assets/img/file.svg'

export const Container = styled.div``

export const AddBookWrapper = styled.div`
  display: flex;
  /* align-items: start; */
`

export const AddBookFileBox = styled.div`
  width: 50%;
  position: relative;
  background-color: var(--labelBg-color);
`

export const AddBookFormBox = styled.div`
  width: 50%;
  padding: 48px 123px;
`

export const AddBookForm = styled.form``
export const AddBookFormTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: var(--black-color);
`

export const AddBookFormInput = styled.input`
  padding: 13px 0px 12px 22px;
  font-size: 14px;
  line-height: 21px;
  color: #aaaaaa;
  background: var(--white-color);
  border: 1px solid #b4b4bb;
  border-radius: 10px;
`
export const AddBookFormSelect = styled.select`
  padding: 13px 0px 12px 22px;
  font-size: 14px;
  line-height: 21px;
  color: #aaaaaa;
  background: var(--white-color);
  border: 1px solid #b4b4bb;
  border-radius: 10px;
`
export const AddBookFormLabel = styled.label`
  position: absolute;
  left: 230px;
  top: 150px;
  width: 315px;
  height: 428px;
  padding: 161px 73px;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  opacity: 0.3;
  background-image: url(${File});
  background-position: calc(50% + -0px) calc(50% + -50px);
  background-size: 62px;
  background-repeat: no-repeat;
  background-color: #f8f8f8;
  border: 1px dashed rgba(0, 0, 0, 0.3);
  border-radius: 17px;
`
export const AddBookFormInputFile = styled.input`
  display: none;
`
export const AddBookFormOption = styled.option``

export const AddBookFormTextarea = styled.textarea`
  padding: 13px 0px 48px 22px;
  font-size: 14px;
  line-height: 21px;
  color: #aaaaaa;
  background: var(--white-color);
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  resize: none;
`

export const AddBookFormButton = styled.button`
  margin-top: 34px !important;
  padding: 5px 20px;
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  align-items: center;
  text-align: center;
  color: var(--white-color);
  background-color: var(--buttonBg-color);
  border-radius: 99px;
`
