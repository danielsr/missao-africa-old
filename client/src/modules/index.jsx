import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { store } from '../state'
import client from '../state/apollo'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    )
  }
}

export default App
