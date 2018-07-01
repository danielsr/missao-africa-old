import { types } from './actions'

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return action.isLoading
    default:
      return state
  }
}

export const msg = (state = null, action) => {
  switch (action.type) {
    case types.SET_MSG:
      return action.msg
    default:
      return state
  }
}
