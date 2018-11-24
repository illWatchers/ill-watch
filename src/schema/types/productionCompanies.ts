const productionCompaniesType = `
  type ProductionCompanies {
    id: ID
    logo_path: String
    name: String
    origin_country: String
  }
`

export const productionCompanies = () => [productionCompaniesType]
