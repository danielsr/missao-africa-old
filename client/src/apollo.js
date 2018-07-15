import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'

const uri = process.env.NODE_ENV === 'production' ? '/graphql' : 'http://localhost:3000/graphql'

const link = new HttpLink({ uri })

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  link
})


export default client
