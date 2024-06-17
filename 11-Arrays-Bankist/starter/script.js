'use strict'
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
}
const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
}
const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
}
const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
}
const accounts = [account1, account2, account3, account4]
const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date')
const labelBalance = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary__value--in')
const labelSumOut = document.querySelector('.summary__value--out')
const labelSumInterest = document.querySelector('.summary__value--interest')
const labelTimer = document.querySelector('.timer')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.login__btn')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnLoan = document.querySelector('.form__btn--loan')
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort')

const inputLoginUsername = document.querySelector('.login__input--user')
const inputLoginPin = document.querySelector('.login__input--pin')
const inputTransferTo = document.querySelector('.form__input--to')
const inputTransferAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan-amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
//Insert the current balance on the page
const currentBalancePage = function (somars) {
  const results = somars.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${results} €`
}
currentBalancePage(account1.movements)
//Insert all account movements (deposit & withdraw)
const displayMovements = function (movements) {
  containerMovements.innerHTML = '' //Remove the old initial data showing in the page
  movements.forEach(function (mov, i) {
    const moneyINorOut = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${moneyINorOut}">${
      i + 1
    } ${moneyINorOut}</div>
    <div class="movements__value">${mov} €</div>
  </div>'`
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}
displayMovements(account1.movements)
//Money in
const calcDisplaySummary = function (moneyBalance) {
  const incomes = moneyBalance
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes}€`
  //money out
  const outcome = moneyBalance
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(outcome)}€`
  //Ganhos de dinheiro guardado, o 2º filter é para tirar valores menor que um da lista
  const interest = moneyBalance
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr)
      return int >= 1
    })
    .reduce((acc, int) => acc + int, 0)
  labelSumInterest.textContent = `${interest}€`
}
calcDisplaySummary(account1.movements)

/*//13/06 Getting the 1st name letter
displayMovements(account1.movements)
const user = 'Henrique Nagy Martins'
const username = user
  .toLowerCase()
  .split(' ')
  .map(Upper => Upper[0])
  .join('')
console.log(username)

const gettingNamez = function (allnamez) {
  allnamez.forEach(function (uniqueName) {
    uniqueName.username = uniqueName.owner
      .toLowerCase()
      .split(' ')
      .map(Upper => Upper[0])
      .join('')
  })
}
gettingNamez(accounts)
console.log(accounts)*/

/*//08/06/2024 As duas maneiras abaixo, uma é usando for of e outra usando foreach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
for (const movement of movements) {
  if (movement > 0) console.log(`You deposited ${movement}`)
    else console.log(`You withdrew ${Math.abs(movement)}`)
}
console.log('-----------Usando com o Foreach')
movements.forEach(function (insideNumbers) {
  if (insideNumbers > 0) console.log(`You've deposited ${insideNumbers}`)
    else console.log(`You withdrew ${Math.abs(insideNumbers)}`)
})
//Agora as duas abaixo: a 1ª é usando for of com duas variaveis e entries, e a 2ª é uma espécie de entries com function
for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`You deposited ${movement}`)
    else console.log(`You withdrew ${Math.abs(movement)}`)
}
console.log('-----------Usando com o Foreach, function e 3 itens dentro')
movements.forEach(function (currentElement, currentIndex, entireArray) {
  if (currentElement > 0) console.log(`You deposited ${currentElement}`)
  else console.log(`You withdrew ${Math.abs(currentElement)}`)
})*/

/*const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
])
//Map()
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`)
})

//set() O funcionamento para ele é diferente dos outros, não tem como definir uma key pois não tem. ai usa o underline pois ele só tem um valor único, mas não pode repetir nome pq dá problema no console
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR', 'USD'])
console.log(currenciesUnique)
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`)
})*/

/*// Coding challenge dogs
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

//11/06
const checkDogs = function (dogsJulia, dogsKate) {
  const dataWithoutCats = dogsJulia.slice()
  dataWithoutCats.splice(0, 1)
  console.log(dataWithoutCats)
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])*/

/*//12/06/2024 map method with arrow and for of
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const eurToUsd = 1.1

const ConvertToUsd = movements.map(function (mov) {
  return Math.round(mov * eurToUsd)
})
console.log(ConvertToUsd) //(8) [220, 495, -440, 3300, -715, -143, 77, 1430]

//mesmo que o map acima porém versão arrow
const ConvertToUsdArrow = movements.map(mov => Math.round(mov * eurToUsd))
console.log(ConvertToUsdArrow)

//Same process but with For (the correct modern jS is to use map instead)
const movementsNew = []
for (const mov of movements) movementsNew.push(Math.round(mov * eurToUsd))
console.log(movementsNew) //(8) [220, 495, -440, 3300, -715, -143, 77, 1430]

//Mesma conteúdo da aula 08/06 com foreach e for of e agora trocando for of pelo map()
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
)
console.log(movementsDescriptions)*/

/*//13/06 Agora trabalhando com o filter()
const deposits = movements.filter(function (mov) {
  return mov > 0
})
console.log(deposits) //[200, 450, 3000, 70, 1300]

const withdrawalz = movements.filter(saque => saque < 0)
console.log(withdrawalz) //[-400, -650, -130]*/

/*//13/06 agora a aula do reduce()
//accumulator = SNOWBALL
const balaance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`) //Aqui é pra quando vc quiser ver linha a linha o funcionamento da bagaça
  return acc + cur //Acumulador que começa pelo zero, definido após o }, + o nº atual
}, 0)
console.log(balaance) //3840

//Arrow function
const balance2 = movements.reduce((acc, cur) => acc + cur, 0)
console.log(balance2) //3840

//usando com o for
let balance3 = 0
for (const mov of movements) balance3 += mov
console.log(balance3) //3840

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc
  else return mov
}, movements[0])
console.log(max)
*/

/*//14/06 Coding challenge dogs 2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

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
*/

/*//14/06 Somar valores positivos do array movements 
const eurToUsd = 1.1
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0)
console.log(totalDepositsUSD)

//Caso tenha um erro e não saiba em qual é, dá para ir no segundo item(aqui é o map), pegar a info do arr (mov,i,arr) e mostrar o array atual que o item anterior criou (o filter). Nesse caso o erro foi o sinal < em filter, ai no array vc vai ver q tão todos negativos, mas o resultado pretendido é positivo. ai achou o erro.
const totalDepositsUSD = movements
  .filter(mov => mov < 0)
  .map((mov, i, arr) => {
    console.log(arr)
    return mov * eurToUsd
  })
  .reduce((acc, mov) => acc + mov, 0)
console.log(totalDepositsUSD)*/
