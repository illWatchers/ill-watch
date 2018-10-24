

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
    },
    movieByID: (root, args, context) => {
      return context.dataSources.theMovieDB.getMovieByID(args.movieID)
    }
  },
}

exports.resolvers = resolvers
