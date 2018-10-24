const axios = require('axios')

const getExchangeRate = async (from, to) => {
  const response = await axios.get(`http://data.fixer.io/api/latest?access_key=KEY`)
  const euro = response.data.rates[from]
  const rate = euro * response.data.rates[to]
  return rate
}

const getCountries = async (currencyCode) => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
  return response.data.map((country) => country.name)
}

getExchangeRate('USD', 'CAD').then((rate) => {
  console.log(rate)
})

getCountries('CAD').then((countries) => {
  console.log(countries)
})
