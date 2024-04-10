'use strict'
const populations = [40, 500, 25, 210]
function percentageOfWorld1(population) {
  return (population / 7900) * 100
}
//Método 'manual'
const percentages = [
  percentageOfWorld1(populations[0]).toFixed(2),
  percentageOfWorld1(populations[1]).toFixed(2),
  percentageOfWorld1(populations[2]).toFixed(2),
  percentageOfWorld1(populations[3]).toFixed(2)
]
console.log(percentages)

//Método 'automático'
const percentages2 = []
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]).toFixed(2))
}
console.log(percentages2)

//Método com 'while'
const percentages3 = []
let counter = 0
while (counter < populations.length) {
  percentages3.push(percentageOfWorld1(populations[counter]).toFixed(2))
  counter++
}
console.log(percentages3)
