const mutations = `
  type Mutation {
    addToWatchList(movieID: Int): Int
    removeFromWatchList(movieID: Int): Int
  }
`

export const mutation = () => [
  mutations
]
