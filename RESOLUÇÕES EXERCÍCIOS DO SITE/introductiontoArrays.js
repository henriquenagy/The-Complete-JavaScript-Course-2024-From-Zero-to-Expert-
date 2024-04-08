'use strict'
const populations = [40, 500, 25, 210]
console.log(populations.length === 4) //Resultado true or false

function percentageOfWorld1(population) {
  return (population / 7900) * 100
}
/*//MEU MÉTODO
const percentages = []
for (let i = 0; i < populations.length; i++) {
  percentages.push(percentageOfWorld1(populations[i]).toFixed(2))
}*/
//MÉTODO JONAS
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
]

console.log(percentages)
