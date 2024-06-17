/* Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]*/

const avg1 = [5, 2, 4, 1, 15, 8, 3]
const avg2 = [16, 6, 10, 5, 6, 1, 4]
const calcAverageHumanAge3 = avg1.map(age =>
  age <= 2 ? 2 * age : 16 + age * 4
)
const adults = calcAverageHumanAge3.filter(age => age >= 18)
const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0)
console.log(`${calcAverageHumanAge3}\n${adults}\n${average}`)
