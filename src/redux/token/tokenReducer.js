const defaultState = {
  token: localStorage.getItem('token') || '',
}

export const GET_TOKEN = 'GET_TOKEN'
export const DELETE_TOKEN = 'DELETE_TOKEN'

export const tokenReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return { ...state, token: action.payload }
    case DELETE_TOKEN:
      return {
        ...state,
        token: '',
      }
    default:
      return state
  }
}
