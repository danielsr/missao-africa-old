import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { store } from './store'
import client from './apollo'
import Routes from './modules/Routes'
import Main from './modules/Main'
import './style/style.css'

const App = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Main>
          <Routes />
        </Main>
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
)

/* eslint-disable no-undef */
ReactDOM.render(<App />, document.getElementById('root'))
