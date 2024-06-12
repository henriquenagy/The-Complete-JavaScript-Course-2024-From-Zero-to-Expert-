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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '' //Remove the old initial data showing in the page
  movements.forEach(function (mov, i) {
    const moneyINorOut = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${moneyINorOut}">${
      i + 1
    } ${moneyINorOut}</div>
    <div class="movements__value">${mov}</div>
  </div>'`
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}

displayMovements(account1.movements)

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

//12/06/2024 map method with arrow and for of
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
console.log(movementsDescriptions)
