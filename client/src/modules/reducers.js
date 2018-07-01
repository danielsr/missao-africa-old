import { combineReducers } from 'redux'
import { isLoading, msg } from './Main/reducers'

export default combineReducers({
  isLoading,
  msg
})
