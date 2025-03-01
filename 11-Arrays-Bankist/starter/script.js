'use strict'
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
 owner: 'Henrique Nagy',
 movements: [49930, 100099, 709990, 5550, 9580, 65000, 89555],
 interestRate: 5,
 pin: 6969
}
const accounts = [account1, account2, account3, account4]

//Insert the current balance on the page
const currentBalancePage = function (acc) {
 acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0) //Precisa criar novo item de movimentação para não alterar o original, pois nesse novo terá novos itens dentro do array
 labelBalance.textContent = `${acc.balance} €`
}
//Insert all account movements (deposit, withdraw & sort)
const displayMovements = function (movements, sort = false) {
 containerMovements.innerHTML = '' //Remove the old initial data showing in the page

 const movs = sort ? movements.slice().sort((a, b) => a - b) : movements

 movs.forEach(function (mov, i) {
  const moneyINorOut = mov > 0 ? 'deposit' : 'withdrawal'
  const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${moneyINorOut}">${i + 1} ${moneyINorOut}</div>
    <div class="movements__value">${mov} €</div>
  </div>'`
  containerMovements.insertAdjacentHTML('afterbegin', html)
 })
}
//Money in, out and gains
const calcDisplaySummary = function (acc) {
 const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
 labelSumIn.textContent = `${incomes}€`
 //money out
 const outcome = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
 labelSumOut.textContent = `${Math.abs(outcome)}€`
 //Ganhos de dinheiro guardado, o 2º filter é para tirar valores menor que um da lista
 const interest = acc.movements
  .filter(mov => mov > 0)
  .map(deposit => (deposit * acc.interestRate) / 100)
  .filter(int => int >= 1)
  .reduce((acc, int) => acc + int, 0)
 labelSumInterest.textContent = `${Math.abs(interest)}€`
}
//Criando usuários de acesso
const createUsernames = function (accs) {
 accs.forEach(function (acc) {
  acc.username = acc.owner
   .toLowerCase()
   .split(' ')
   .map(name => name[0])
   .join('')
 })
}
createUsernames(accounts)

const updateUI = function (displays) {
 //Display Balance
 currentBalancePage(displays)
 //Display Movements
 displayMovements(displays.movements)
 //Display Summary
 calcDisplaySummary(displays)
}
//Para acesso a tela do banco LOGIN e chamar funções anteriores
let currentAccount //Chamei fora pois vou usar em outra função
btnLogin.addEventListener('click', function (e) {
 e.preventDefault() //para de dar reload quando clicar no botão
 currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value) //Checar usuário atual para acesso
 //if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) OU o método abaixo
 if (currentAccount?.pin === Number(inputLoginPin.value)) {
  inputLoginPin.value = inputLoginUsername.value = ''
  inputLoginPin.blur()
  //Display UI and message
  labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`
  containerApp.style.opacity = 100
  updateUI(currentAccount) //Chamar funções anteriores
 }
})
//Transfer money
let transfMoneys
btnTransfer.addEventListener('click', function (a) {
 a.preventDefault() //para de dar reload quando clicar no botão
 transfMoneys = accounts.find(acc => acc.username === inputTransferTo.value)
 const amount = Number(inputTransferAmount.value)
 console.log(amount, transfMoneys)
 if (
  amount > 0 &&
  transfMoneys &&
  amount <= currentAccount.balance &&
  transfMoneys?.username !== currentAccount.username
 ) {
  //Doing the money transfer between accounts
  console.log('deu certo')
  currentAccount.movements.push(-amount)
  transfMoneys.movements.push(amount)
  updateUI(currentAccount)
  inputTransferAmount.value = inputTransferTo.value = ''
 } else {
  inputTransferAmount.value = inputTransferTo.value = ''
 }
})
//Empréstimo Loan
btnLoan.addEventListener('click', function (j) {
 j.preventDefault()
 const Quantityss = Number(inputLoanAmount.value)
 if (Quantityss > 0 && currentAccount.movements.some(mov => mov >= Quantityss * 0.1)) {
  currentAccount.movements.push(Quantityss)
  updateUI(currentAccount)
 }
 inputLoanAmount.value = ''
})
//close account
btnClose.addEventListener('click', function (close) {
 close.preventDefault()
 let confirmUser = currentAccount.username === inputCloseUsername.value
 let confirmPin = currentAccount.pin === Number(inputClosePin.value)
 if (confirmPin && confirmUser) {
  //Delete account
  accounts.splice(
   accounts.findIndex(element => element === currentAccount),
   1
  )
  alert('Usuário deletado')
  containerApp.style.opacity = 0
  inputCloseUsername.value = inputClosePin.value = ''
 } else {
  alert('Wrong Credentials!')
  inputCloseUsername.value = inputClosePin.value = ''
 }
})

let sorted = false
btnSort.addEventListener('click', function (z) {
 z.preventDefault()
 displayMovements(currentAccount.movements, !sorted)
 sorted = !sorted
})

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
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

/*//28/06 flatmap()
//flat
const overalBalance = accounts
 .map(acc => acc.movements)
 .flat()
 .reduce((acc, mov) => acc + mov, 0)

//flatMap()
const overalBalance2 = accounts
 .flatMap(acc => acc.movements)
 .reduce((acc, mov) => ac + mov, 0)*/

/*//01/07 Criando array novo com os dados de UI
//Esse não dá certo pois pega os dados antes do login
const movementsUI = Array.from(document.querySelectorAll('.movements__value')) //Pega os números dessa classe
console.log(movementsUI) //Erro pois só pega dois itens dos vários q tem, pois executa antes de eu acessar o login
//Agora sim pega todo após o clique, visto que já foi dado o login na tela do user
labelBalance.addEventListener('click', function () {
 const movementsUIok = Array.from(
  document.querySelectorAll('.movements__value'),
  el => Number(el.textContent.replace('€', ''))
 )
 console.log(movementsUIok) //(8) [1300, 70, -130, -650, 3000, -400, 450, 200]
 const movementsUiOk2 = [...document.querySelectorAll('.movements__value')]
 console.log(movementsUiOk2) //Só pega os movimentos, não os valores
})*/

/* //03/07
//1. Somando todos os valores maiores que 0 do array das contas
const bankDepositSum = accounts
 .flatMap(acc => acc.movements)
 .filter(mov => mov > 0)
 .reduce((sum, cur) => sum + cur, 0)
console.log(bankDepositSum) // 1052614

//2. Quant. de nºs maiores que 1K (dois métodos, mesmo resultado) com reduce e filter
const numDeposits1K = accounts
 .flatMap(acc => acc.movements)
 .filter(mov => mov >= 1000).length
//método 2
const numDeposits1K2 = accounts
 .flatMap(acc => acc.movements)
 .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0)
console.log(numDeposits1K, numDeposits1K2) //12, 12

//3. 2 maneiras diferentes de Retornar depósitos e saques com flatmap e reduce
const sums = accounts
 .flatMap(acc => acc.movements)
 .reduce(
  (sums, cur) => {
   cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur)
   return sums
  },
  { deposits: 0, withdrawals: 0 }
 )
console.log(sums) //{deposits: 1052614, withdrawals: -7340}

//Método 2
const { deposits2, withdrawals2 } = accounts
 .flatMap(acc => acc.movements)
 .reduce(
  (sums, cur) => {
   sums[cur > 0 ? 'deposits2' : 'withdrawals2'] += cur
   return sums
  },
  { deposits2: 0, withdrawals2: 0 }
 )
console.log(deposits2, withdrawals2) //1052614 -7340 */

/* //13/07
const convertTitleCase = function (title) {
 const capitalizer = str => str[0].toUpperCase() + str.slice(1)

 const exceptionsWords = [
  'a',
  'an',
  'and',
  'the',
  'but',
  'or',
  'on',
  'in',
  'with'
 ]
 const titleCase = title
  .toLowerCase()
  .split(' ')
  .map(word => (exceptionsWords.includes(word) ? word : capitalizer(word)))
  .join(' ')

 return capitalizer(titleCase)
}

console.log(convertTitleCase('sir. najaun is one of the richest'))
console.log(
 convertTitleCase('fuck you i will not do what they tell me suckers ze rodelas')
)
console.log(convertTitleCase('shorter one text curtao memo'))*/

/*//18/07 e dia anterior, exercicios dos dogs da sarah e compania
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
 ]
 //1. Loop em dogs e inserir novo item dentro de porção recomendada
 dogs.forEach(curDog => (curDog.recFood = Math.trunc(curDog.weight ** 0.75 * 28)))
 
 //2.localizar sara's dog
 const sarahDog = dogs.find(dogOfSarah => dogOfSarah.owners.includes('Sarah'))
 const sarahEat = `Sarah's dog is eating too ${
  sarahDog.curFood > sarahDog.recFood ? 'much' : 'little'
 }`
 //console.log(sarahEat) //Sarah's dog is eating too much
 
 //3. Criar novo array para dogs que comem muito, usando a nova variável que criamos antes com dogs.forEach(curDog => etc...
 const ownersEatTooMuch = dogs
  .filter(higher => higher.curFood > higher.recFood)
  .flatMap(onlyName => onlyName.owners)
 //console.log(ownersEatTooMuch) //[ 'Matilda', 'Sarah', 'John' ]
 
 const ownersEatTooLittle = dogs
  .filter(lower => lower.curFood < lower.recFood)
  .flatMap(onlyName => onlyName.owners)
 //console.log(ownersEatTooLittle) //[ 'Alice', 'Bob', 'Michael' ]
 
 //4. Logar na tela usando join e trocar , por and
 //console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`) // Matilda and Sarah and John's dogs eat too much!
 //console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`) //Alice and Bob and Michael's dogs eat too little!
 
 //5. Logar se algum dog está comendo exatamente o recomendado (just true or false)
 //console.log(dogs.some(exactlyEat => exactlyEat.curFood === exactlyEat.recFood)) //false
 
 //6. eating an OKAY amount of food (just true or false)
 //console.log(dogs.some(comeuOK => comeuOK.curFood > comeuOK.recFood * 0.9 && comeuOK.curFood < comeuOK.recFood * 1.1)) //true
 
 //7. Create an array containing the dogs that are eating an OKAY amount of food
 
 const newArrayOkDog = dogs.filter(
  comeuOK => comeuOK.curFood > comeuOK.recFood * 0.9 && comeuOK.curFood < comeuOK.recFood * 1.1
 )
 console.log(newArrayOkDog) //[ { weight: 32, curFood: 340, owners: [ 'Michael' ], recFood: 376 } ]
 
 //8. Create a shallow copy (slice) of the dogs array and sort it by recommended food portion in an ascending order
 const sortedDogs = dogs.slice().sort((a, b) => a.recFood - b.recFood)
 console.log(sortedDogs)
*/
