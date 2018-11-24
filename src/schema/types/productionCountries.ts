const productionCountriesType = `
  type ProductionCountries {
    iso_3166_1: ID
    name: String
  }
`

export const productionCountries = () => [productionCountriesType]
