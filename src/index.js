const admin = require('firebase-admin')
const serviceAccount = require('../config/firebase/serviceAccountKey.json')
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


// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
]

const server = new ApolloServer({ 
  schema,
  context: { db } 
})

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
