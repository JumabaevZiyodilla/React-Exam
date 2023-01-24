import styled from '@emotion/styled'
import CameraImg from '../../../assets/img/Camera.svg'

export const ProfileSection = styled.section`
  padding-top: 126px;
  padding-bottom: 89px;
`

export const Container = styled.div`
  background-color: var(--white-color);
`

export const ProfileForm = styled.form``
export const ProfileTitle = styled.h3`
  margin: 0px 0px 32px 0px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: var(--black-color);
`
export const ProfileFormInput = styled.input`
  padding: 12px 0px 12px 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #464e5f;
  background-color: #f3f6f9;
  border-radius: 4px;
  border: none;
`
export const ProfileImageLabel = styled.label`
  position: absolute;
  left: -160px;
  width: 50px;
  height: 50px;
  background-image: url(${CameraImg});
  background-size: 50px;
`
export const ProfileImageInput = styled.input`
  display: none;
`
export const ProfileButton = styled.button`
  display: block;
  margin-top: 44px;
  margin-left: auto;
  padding: 12px 20px;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  color: var(--white-color);
  background-color: var(--buttonBg-color);
  border-radius: 4px;
`
