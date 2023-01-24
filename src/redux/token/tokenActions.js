import { GET_TOKEN, DELETE_TOKEN } from './tokenReducer'


export const addToken = (token) => {
  return {
    type: GET_TOKEN,
    payload: token,
  }
}

export const deleteToken = () => {
  return {
    type: DELETE_TOKEN,
    payload: '',
  }
}


