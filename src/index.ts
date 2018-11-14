import { schema } from './schema'
import admin from 'firebase-admin'
import { ApolloServer } from 'apollo-server'
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

const serviceAccount = getServiceAccount()
// auth to firebase
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })
// firestore DB ref
var db = admin.firestore()

// apollo server connection & settings 
const server = new ApolloServer({
  // executable schema, includes resolvers
  schema,
  // app context. TODO: probably should be async
  context: { db },
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
