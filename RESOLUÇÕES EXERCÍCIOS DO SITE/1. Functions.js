'use strict'
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`
}
const country1 = describeCountry('Buri', 10, 'São Paulo')
const country2 = describeCountry('Peruíbe', 1, 'São Paulo')
const country3 = describeCountry('Sorocaba', 6, 'São Paulo')

console.log(country1)
console.log(country2)
console.log(country3)
