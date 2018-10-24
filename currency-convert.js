const axios = require('axios')

const getExchangeRate = async (from, to) => {
  const response = await axios.get(`http://data.fixer.io/api/latest?access_key=KEY`)
  const euro = response.data.rates[from]
  const rate = euro * response.data.rates[to]
  return rate
}

getExchangeRate('USD', 'CAD').then((rate) => {
  console.log(rate)
})
