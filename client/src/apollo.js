import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, concat } from 'apollo-client-preset'

const cache = new InMemoryCache()

const uri = process.env.NODE_ENV === 'production' ? '/graphql' : 'http://localhost:3000/graphql'

const httpLink = new HttpLink({ uri })

const token = localStorage.getItem('token')

const middleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'x-access-token': token,
    }
  }))

  return forward(operation);
})

const client = new ApolloClient({
  cache,
  link: concat(middleware, httpLink)
})

export default client
