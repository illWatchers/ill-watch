export const resolvers = {
  Query: {
    watchlist: (root: any, args: any, context: any) => {
      return context.db.collection('poc').get()
      .then((snapshot: any) => {
        return snapshot.docs[0].data().watchList
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
}
