import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { store } from './store'
import client from './apollo'
import Routes from './routes'
import Main from './Main'

class App extends Component {
  render() {
    return (
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
  }
}

export default App
