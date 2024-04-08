'use strict'
const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  ).toFixed(2)}% of the world`
}
function percentageOfWorld1(population) {
  return (population / 7900) * 100
}
let country1 = describePopulation('Buri', 300)
let country2 = describePopulation('Boston', 550)
let country3 = describePopulation('Reveree', 400)

console.log(country1)
console.log(country2)
console.log(country3)
