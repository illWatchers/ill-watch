const castType = `
  type Cast {
    cast_id: Int
    character: String
    credit_id: String
    gender: Int
    id: ID
    name: String
    order: Int
    profile_path: String

  }
`

export const cast = () => [castType]
