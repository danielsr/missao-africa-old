import { combineReducers } from 'redux'
import { isLoading, msg } from './modules/Main/reducers'

export default combineReducers({
  isLoading,
  msg
})
