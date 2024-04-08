'use strict'
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100
}
let country1 = percentageOfWorld2(220)
let country2 = percentageOfWorld2(334)
let country3 = percentageOfWorld2(169)
console.log(country1.toFixed(2), country2.toFixed(2), country3.toFixed(2))

function percentageOfWorld1(population) {
  return (population / 7900) * 100
}
country1 = percentageOfWorld1(250)
country2 = percentageOfWorld1(304)
country3 = percentageOfWorld1(16)

console.log(country1.toFixed(2), country2.toFixed(2), country3.toFixed(2))

const percentageOfWorld3 = population => (population / 7900) * 100
country1 = percentageOfWorld3(300)
country2 = percentageOfWorld3(200)
country3 = percentageOfWorld3(10)
console.log(country1.toFixed(2), country2.toFixed(2), country3.toFixed(2))
