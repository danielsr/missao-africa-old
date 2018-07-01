import { combineReducers } from 'redux'
import { types } from './actions'

const isLoading = (state = false, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return action.isLoading
    default:
      return state
  }
}

const msg = (state = null, action) => {
  switch (action.type) {
    case types.SET_MSG:
      return action.msg
    default:
      return state
  }
}

export default combineReducers({
  isLoading,
  msg
})
