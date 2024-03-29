import { createStore } from 'redux'
import reducers from './reducers'

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
/* eslint-enable */
