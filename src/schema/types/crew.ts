const crewType = `
  type Crew {
    credit_id: String
    department: String
    gender: Int
    id: ID
    job: String
    name: String
    profile_path: String
  }
`

export const crew = () => [crewType]
