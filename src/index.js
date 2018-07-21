import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'
import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose'
import resolvers from './resolvers/sponsors'
import { typeDefs } from './schema'
import auth from './auth'

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })

const server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

if (process.env.NODE_ENV !== 'production') {
  server.use('*', cors({ origin: 'http://localhost:8080' }))
}

auth(server)

const schema = makeExecutableSchema({ typeDefs, resolvers })

server.use('/graphql', graphqlExpress({ schema }))

server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')))

  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'index.html'))
  })
}

server.listen(process.env.PORT || 3000)
