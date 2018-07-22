import ApolloClient from 'apollo-boost'

const uri = process.env.NODE_ENV === 'production' ? '/graphql' : 'http://localhost:3000/graphql'

/* eslint-disable no-undef */
const token = localStorage.getItem('token')

const client = new ApolloClient({
  uri,
  headers: {
    'x-access-token': token
  },
  onError: ({ networkError }) => {
    if (networkError.statusCode === 401) {
      window.location = '/login'
    }
  }
})
/* eslint-enable */

export default client
