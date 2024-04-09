'use strict'
const myCountry = {
  country: 'Boston',
  capital: 'Massachusetts',
  language: 'English',
  population: 6,
  neighbours: ['Allston', 'Brighton', 'Chinatown']
}
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
)
console.log((myCountry.population += 2))
console.log((myCountry['population'] -= 2))
