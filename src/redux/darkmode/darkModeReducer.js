import { SET_THEME } from './actions'

const initialState = {
  theme: localStorage.getItem('theme') || '',
}

export const themeReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_THEME:
      return { ...state, theme: (state.theme = actions.payload) }
    default:
      return state
  }
}
