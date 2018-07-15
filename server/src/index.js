import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'
import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose'
import resolvers from './resolvers/sponsors'
import { typeDefs } from './schema'

const server = express()

mongoose.connect('mongodb://danielrodrigues:X8jhP3db@ds251197.mlab.com:51197/missaoafrica')

const schema = makeExecutableSchema({ typeDefs, resolvers })

server.use('*', cors({ origin: 'http://localhost:8080' }))

server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema })
)

server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.resolve(__dirname, '..', '..', 'client', 'dist')))

  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'client', 'dist', 'index.html'))
  })
}

server.listen(process.env.PORT || 3000)
