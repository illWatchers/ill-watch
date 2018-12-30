import admin from 'firebase-admin'
import { ApolloServer } from 'apollo-server'

import { schema } from './schema'
import { TheMovieDB } from './theMovieDB'

const getServiceAccount = () => {
  try {
    // try to get credentials from env
    const credentials = JSON
      .parse(Buffer.from(process.env.SERVICE_ACCOUNT_KEY || '', 'base64').toString())
    if (!credentials) { throw new Error() }
    return credentials
  } catch (e) {
    // get credential from local config
    const credentials = require('../config/firebase/serviceAccountKey.json')
    return credentials
  }
}

const getApiKey = (): string => {
  try {
    // try to get key from env
    const key = process.env.THE_MOVIE_DB_API_KEY
    if (!key) { throw new Error() }
    return key
  } catch (e) {
    const themoviedbConfig = require('../config/private.json')
    // get key from local config
    const movieDbConfig: any = themoviedbConfig.themoviedb
    return movieDbConfig.api_key
  }
}

const serviceAccount = getServiceAccount()

// auth to firebase
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })
// firestore DB ref
var db = admin.firestore

// apollo server connection & settings 
const server = new ApolloServer({
  // executable schema, includes resolvers
  schema,
  // app context
  context: async () => {
    console.log('Executes every time request is sent')
    const apiKey = await getApiKey()

    return ({
      db,
      apiKey
    })
  },
  // APIs
  dataSources: () => ({ theMovieDB: new TheMovieDB() })
})

const serverSettings = {
  // port 4000 for local development
  // or defined by enviroment port on production
  port: process.env.NODE_ENV === 'development' ? 4000 : process.env.PORT,
}

server.listen(serverSettings).then(({ url }: { url: string }) => {
  console.log('Server port', serverSettings.port)
  console.log(`🚀  Server ready at ${url}`)
})
