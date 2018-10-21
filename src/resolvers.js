
// const authors = [
//   { id: 1, firstName: "Tom", lastName: "Coleman" },
//   { id: 2, firstName: "Sashko", lastName: "Stubailo" }
// ]

// const posts = [
//   { id: 1, authorId: 1, title: "Introduction to GraphQL", votes: 2 },
//   { id: 2, authorId: 2, title: "GraphQL Rocks", votes: 3 },
//   { id: 3, authorId: 2, title: "Advanced GraphQL", votes: 1 }
// ]
const resolvers = {
  Query: {
    watchlist: (root, args, context) => {
      return context.db.collection('poc').get()
      .then((snapshot) => {
        return snapshot.docs[0].data().watchList
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
    }
  },
}

module.exports = resolvers
