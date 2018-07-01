import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose'
import resolvers from './resolvers/sponsors'
import { typeDefs } from './schema'

const server = express()
const PORT = 3000

mongoose.connect('mongodb://danielrodrigues:X8jhP3db@ds251197.mlab.com:51197/missaoafrica')

const schema = makeExecutableSchema({ typeDefs, resolvers })

server.use('*', cors({ origin: 'http://localhost:8080' }))

server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema })
)

server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

server.listen(PORT)
