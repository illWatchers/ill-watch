import { cast } from './cast'
import { crew } from './crew'

const creditsType = `
  type Credits {
    id: ID
    cast: [Cast]
    crew: [Crew]
  }
`

export const credits = () => [
    creditsType,
    cast,
    crew
]
