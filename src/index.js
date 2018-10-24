const admin = require('firebase-admin')
const schema = require('./schema')
const { ApolloServer, gql } = require('apollo-server')
const fetch = require('node-fetch')
const { TheMovieDB } = require('./theMovieDB')

// firebase service account
let serviceAccount
try {
  serviceAccount = require('../config/firebase/serviceAccountKey.json')
} catch (e) {
  serviceAccount = JSON.parse(Buffer.from(process.env.SERVICE_ACCOUNT_KEY, 'base64').toString())
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

var db = admin.firestore()

// apollo server connection & settings 
const server = new ApolloServer({
  schema,
  context: { db },
  dataSources: () => ({ theMovieDB: new TheMovieDB() })
})

const serverSettings = {
  port: process.env.NODE_ENV === 'development' ? 4000 : process.env.PORT,
}

server.listen(serverSettings).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
