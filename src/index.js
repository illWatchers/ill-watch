const admin = require('firebase-admin')

let serviceAccount
try {
  serviceAccount = require('../config/firebase/serviceAccountKey.json')
} catch (e) {
  serviceAccount = JSON.parse(Buffer.from(process.env.SERVICE_ACCOUNT_KEY, 'base64').toString())
}

const schema = require('./schema')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const { ApolloServer, gql } = require('apollo-server')

var db = admin.firestore()


db.collection('poc').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data().watchList)
    })
  })
  .catch((err) => {
    console.log('Error getting documents', err)
  })


const server = new ApolloServer({
  schema,
  context: { db }
})

const serverSettings = {
  port: process.env.NODE_ENV === 'development' ? 4000 : process.env.PORT,
}

server.listen(serverSettings).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
