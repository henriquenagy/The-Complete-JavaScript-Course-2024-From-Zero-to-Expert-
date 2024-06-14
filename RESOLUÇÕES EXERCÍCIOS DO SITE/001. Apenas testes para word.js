/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

//MEU MÉTODO SEM AJUDA
const calcAverageHumanAge = function (dogsAgesArray) {
  const humanAge = []
  dogsAgesArray.map(function (dogAge) {
    if (dogAge <= 2) humanAge.push(2 * dogAge)
    else if (dogAge > 2) humanAge.push(16 + dogAge * 4)
  })
  const humange18 = humanAge.filter(remove => remove > 18)
  const averageYear =
    humange18.reduce((acc, currents) => acc + currents, 0) / humange18.length
  return `Original arrays is ${humanAge}\nArray with adults dogs is ${humange18}\nAverage human dogs age is ${averageYear}`
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
console.log('---------SECOND DATA---------')
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))

//MÉTODO DO PROFESSOR JONAS
const calcAverageHumanAge2 = function (ages) {
  //Função a ser chamada pelos dados do array
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4)) //Cria novo array pelos cálculos com ternary operator
  const adults = humanAges.filter(age => age >= 18) // Filtra pra criar novo array com valores > 18
  console.log(humanAges)
  console.log(adults)
  const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0) //Reduz a um valor só de média
  return average
}
const avg1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3])
console.log('---------SECOND DATA---------')
const avg2 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4])
console.log(avg1, avg2)
