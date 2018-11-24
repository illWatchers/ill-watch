export const resolvers = {
  Query: {
    watchlist: (root: any, args: any, context: any) => {
      return context.db().collection('poc').doc('watchList').get()
      .then((doc: any) => {
        if (!doc.exists) {
          console.log("Document doesn't exist")
        } else {
          return doc.data().list
        }
      })
      .catch((err: Error) => {
        console.log('Error getting documents', err)
      })
    },
    movieByID: (root: any, args: any, context: any) => {
      return context.dataSources.theMovieDB.getMovieByID(args.movieID)
    },
    moviesByTitle: (root: any, args: any, context: any) => {
      return context.dataSources.theMovieDB.getMoviesByTitle(args.title)
    }
  },
  Mutation: {
    addToWatchList: (root: any, args: any, context: any) => {
      context.db().collection('poc').doc('watchList').update({
        list: context.db.FieldValue.arrayUnion(args.movieID)
      })
      return args.movieID
    },
    removeFromWatchList: (root: any, args: any, context: any) => {
      context.db().collection('poc').doc('watchList').update({
        list: context.db.FieldValue.arrayRemove(args.movieID)
      })
      return args.movieID
    },
  }
}
