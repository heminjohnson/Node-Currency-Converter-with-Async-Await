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

const convertCurrency = async (from, to, amount) => {
  const rate = await getExchangeRate(from, to)
  const countries = await getCountries(to)
  const convertedAmount = (amount * rate).toFixed(2)
  return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in the following countries: ${countries.join(', ')}`
}

convertCurrency('EUR', 'INR', 100).then((message) => {
  console.log(message)
})
