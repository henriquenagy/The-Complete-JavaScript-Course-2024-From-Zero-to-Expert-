'use strict'

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale
const account1 = {
 owner: 'Jonas Schmedtmann',
 movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
 interestRate: 1.2, // %
 pin: 1111,

 movementsDates: [
  '2019-11-18T21:31:17.178Z',
  '2019-12-23T07:42:02.383Z',
  '2020-01-28T09:15:04.904Z',
  '2020-04-01T10:17:24.185Z',
  '2020-05-08T14:11:59.604Z',
  '2024-07-30T17:22:43.666Z',
  '2024-08-01T17:22:43.666Z',
  '2024-08-06T17:22:43.666Z'
 ],
 currency: 'EUR',
 locale: 'pt-BR' // de-DE
}

const account2 = {
 owner: 'Jessica Davis',
 movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
 interestRate: 1.5,
 pin: 2222,

 movementsDates: [
  '2019-11-01T13:15:33.035Z',
  '2019-11-30T09:48:16.867Z',
  '2019-12-25T06:04:23.907Z',
  '2020-01-25T14:18:46.235Z',
  '2020-02-05T16:33:06.386Z',
  '2020-04-10T14:43:26.374Z',
  '2020-06-25T18:49:59.371Z',
  '2020-07-26T12:01:20.894Z'
 ],
 currency: 'USD',
 locale: 'en-US'
}

const accounts = [account1, account2]

/////////////////////////////////////////////////
// Elements
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
 const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24))

 const daysPassed = calcDaysPassed(new Date(), date)
 if (daysPassed === 0) return 'Today'
 if (daysPassed === 1) return 'Yesterday'
 if (daysPassed <= 7) return `${daysPassed} days ago`
 // const day = `${date.getDate()}`.padStart(2, 0);
 // const month = `${date.getMonth() + 1}`.padStart(2, 0);
 // const year = date.getFullYear();
 // return `${day}/${month}/${year}`;
 return new Intl.DateTimeFormat(locale).format(date)
}

const formatCur = function (value, locale, currency) {
 return new Intl.NumberFormat(locale, {
  style: 'currency',
  currency: currency
 }).format(value)
}

const displayMovements = function (acc, sort = false) {
 containerMovements.innerHTML = ''

 const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements

 movs.forEach(function (mov, i) {
  const type = mov > 0 ? 'deposit' : 'withdrawal'

  const date = new Date(acc.movementsDates[i])
  const displayDate = formatMovementDate(date, acc.locale)

  const formattedMov = formatCur(mov, acc.locale, acc.currency)

  const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `

  containerMovements.insertAdjacentHTML('afterbegin', html)
 })
}

const calcDisplayBalance = function (acc) {
 acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
 labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency)
}

const calcDisplaySummary = function (acc) {
 const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
 labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency)

 const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
 labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency)

 const interest = acc.movements
  .filter(mov => mov > 0)
  .map(deposit => (deposit * acc.interestRate) / 100)
  .filter((int, i, arr) => {
   // console.log(arr);
   return int >= 1
  })
  .reduce((acc, int) => acc + int, 0)
 labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency)
}

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

const updateUI = function (acc) {
 // Display movements
 displayMovements(acc)

 // Display balance
 calcDisplayBalance(acc)

 // Display summary
 calcDisplaySummary(acc)
}

///////////////////////////////////////
let currentAccount, timer

// FAKE ALWAYS LOGGED IN
currentAccount = account1
updateUI(currentAccount)
containerApp.style.opacity = 100

btnLogin.addEventListener('click', function (e) {
 // Prevent form from submitting
 e.preventDefault()

 currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
 console.log(currentAccount)

 if (currentAccount?.pin === Number(inputLoginPin.value)) {
  // Display UI and message
  labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
  containerApp.style.opacity = 100

  //Get & show only day, month and year day/month/year
  const now = new Date()
  const options = {
   hour: 'numeric',
   minute: 'numeric',
   day: 'numeric',
   month: 'numeric',
   year: 'numeric'
   //weekday: 'long'
  }
  //Assim vc pega o formato de horas do usuário. Mas aqui no user já tem definido
  //const userLocalFormat = navigator.language
  labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)

  /* const day = `${now.getDate()}`.padStart(2, 0)
  const month = `${now.getMonth() + 1}`.padStart(2, 0)
  const year = now.getFullYear()
  const hour = `${now.getHours()}`.padStart(2, 0)
  const min = `${now.getMinutes()}`.padStart(2, 0)
  labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`*/

  // Clear input fields
  inputLoginUsername.value = inputLoginPin.value = ''
  inputLoginPin
   .blur()

   // Update UI
   .updateUI(currentAccount)
 }
})

btnTransfer.addEventListener('click', function (e) {
 e.preventDefault()
 const amount = Number(inputTransferAmount.value)
 const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)
 inputTransferAmount.value = inputTransferTo.value = ''

 if (
  amount > 0 &&
  receiverAcc &&
  currentAccount.balance >= amount &&
  receiverAcc?.username !== currentAccount.username
 ) {
  // Doing the transfer
  currentAccount.movements.push(-amount)
  receiverAcc.movements.push(amount)

  //Add transfer date
  currentAccount.movementsDates.push(new Date().toISOString())
  receiverAcc.movementsDates.push(new Date().toISOString())

  // Update UI
  updateUI(currentAccount)
 }
})

btnLoan.addEventListener('click', function (e) {
 e.preventDefault()

 const amount = Math.floor(inputLoanAmount.value)

 if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
  //atraso na solicitação loan
  setTimeout(function () {
   // Add movement
   currentAccount.movements.push(amount)

   //Add loan date
   currentAccount.movementsDates.push(new Date().toISOString()) //"2024-08-06T02:02:58.277Z"

   // Update UI
   updateUI(currentAccount)
  }, 2500)
 }
 inputLoanAmount.value = ''
})

btnClose.addEventListener('click', function (e) {
 e.preventDefault()

 if (
  inputCloseUsername.value === currentAccount.username &&
  Number(inputClosePin.value) === currentAccount.pin
 ) {
  const index = accounts.findIndex(acc => acc.username === currentAccount.username)
  console.log(index)
  // .indexOf(23)

  // Delete account
  accounts.splice(index, 1)

  // Hide UI
  containerApp.style.opacity = 0
 }

 inputCloseUsername.value = inputClosePin.value = ''
})

let sorted = false
btnSort.addEventListener('click', function (e) {
 e.preventDefault()
 displayMovements(currentAccount.acc, !sorted)
 sorted = !sorted
})

/*// 31/11/2024  Aula 171. Converting And checking numbers
//JS não consegue calcular números decimais
console.log(23 === 23.0) //true
console.log(0.1 + 0.2) // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3) // false

//Converter strings, letras em números sem usar Number, apenas com símbolo +
console.log(Number('23')) //Virou número
console.log(+'23') // Também virou, melhor usar esse é mais curto e não precisa de ()

//Checking if value is a Finite number
console.log(Number.isFinite(20)) //true
console.log(Number.isFinite('20')) //false
console.log(Number.isFinite(+'20X')) //false
console.log(Number.isFinite(23 / 0)) //false

console.log(Number.isInteger(23)) //true
console.log(Number.isInteger(23.0)) //true
console.log(Number.isInteger(23 / 0)) //false */

/*//01/08 Aula 172
//Raiz quadrada squareroot e elevado
console.log(Math.sqrt(25)) // Raiz quadrada de 25
console.log(25 ** (1 / 2)) //25 elevado a 0,5
console.log(8 ** (1 / 3)) //8 elevado ,33

//Máx e Min number in a sequence
console.log(Math.max(5, 7, '23', 12, 21)) //23 - Funciona Type coercion
console.log(Math.max(5, 7, '23px', 12, 21)) //NaN - Does not work parsing

console.log(Math.min('2', 4, 5, '14')) //2

//Calcular área de círculo com raio e usando PI
console.log(Math.PI * Number.parseFloat('10px') ** 2) // 314.1592653589793

//Número aleatórios, porém vai só até 5 ai adiciona mais 1 e vai até 6
console.log(Math.trunc(Math.random() * 6) + 1)

//Aleatory numbers, but between a specified interval, use floor instead of trunc
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min
console.log(randomInt(3, 18))

//Arrendondamentos - Rounding integers
console.log(Math.round(21.3)) // 21
console.log(Math.round(21.9)) // 22

console.log(Math.ceil(16.3)) // 17
console.log(Math.ceil(16.9)) // 17

console.log(Math.floor(11.2)) // 11
console.log(Math.floor('11.8')) // 11

console.log(Math.trunc(5.3)) // 5

console.log(Math.trunc(-3.3)) //-3 trunc vai pra baixo quando é negativo
console.log(Math.floor(-3.3)) //-4 floor pra cima quando é negativo, melhor usar esse do que trunc

//Rounding decimals with toFixed. Qnt. de nºs após virgula. Transforma em strings, tem que usar + ou NUMBER !!
console.log((2.7).toFixed(0)) //3
console.log((2.7).toFixed(3)) //2.700
console.log((2.647).toFixed(2)) //2.65
console.log(+(2.843).toFixed(2)) // 2.84 - correto, aqui é numero pois usei + antes */

/*// 01/08/24 Aula 173 Reminder Operator - Resto da divisão
console.log(5 % 2) // 1
console.log(8 % 3) // 2
console.log(6 % 2) // 0

//Nº se dividido por 2 o resto é zero
const isEven = n => n % 2 === 0
console.log(isEven(3)) //false
console.log(isEven(24)) //true
console.log(isEven(514)) //true

// Trocar cor de fundo se o nº da lista é divisivel por 2
labelBalance.addEventListener('click', function () {
 ;[...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
  if (i % 2 === 0) row.style.backgroundColor = 'orangered'
 })
})*/

/*//03/08 174. Numeric Separators
const diameter = 287_460_000_000
console.log(diameter) // 287460000000
const price = 345_99
console.log(price) //34599

console.log(Number('230_000')) //NaN
console.log(parseInt('230_000')) // 230

//BigInt (pode usar o n ou escrever antes) no log os dois ficam com n no final
console.log(5485979853465489n)
console.log(BigInt(9548597985)) // 9548597985n

//Operations
console.log(100n * 100n) //10000n

const huge = 498351231n
const num = 23
console.log(huge * BigInt(num)) //11462078313n

//Exceptions
console.log(20n > 15) // true
console.log(20n === 20) // false
console.log(typeof 20n) // bigint
console.log(20n == '20') // true
console.log(huge + ' is REALLY big!!!') // 498351231 is REALLY big!!!

//Divisions
console.log(11n / 3n) // 3n transforma em número inteiro
console.log(10 / 3) //3.33333*/

/*// 03/08/24 176. Creating Dates
const now = new Date()
console.log(now) //Sat Aug 03 2024 14:32:14 GMT-0300 (Horário Padrão de Brasília)

console.log(new Date('Aug 03 2024 14:32:14')) // Sat Aug 03 2024 14:32:14 GMT-0300
console.log(new Date('December 24, 2015')) // Thu Dec 24 2015 00:00:00 GMT-0200
console.log(new Date(account1.movementsDates[0])) // Mon Nov 18 2019 18:31:17

console.log(new Date(2037, 10, 19, 15, 23, 5)) // Thu Nov 19 2037 15:23:05 - Criando data manual
console.log(new Date(2037, 10, 33)) // 10 é Novembro, mas tem 33 dias, ai ele joga pra dezembro... Thu Dec 03 2037

console.log(new Date(0)) // Wed Dec 31 1969 21:00:00 - primeira hora do js
console.log(new Date(3 * 24 * 60 * 60 * 1000)) // TIMESTAMP, multiplica dias, 24h, horas, min, seg... O resultado é a data, mas a multiplicação é essa, que daria no mesmo s epor direto igual abaixo 259200000
console.log(new Date(259200000)) // igual acima - Sat Jan 03 1970 21:00:00
console.log('----------------------')

//Working with dates
const future = new Date(2037, 10, 19, 15, 23)
console.log(future) // Thu Nov 19 2037 15:23:00 GMT-0300
console.log(future.getFullYear()) // 2037
console.log(future.getMonth()) // 10 (Novembro é 10)
console.log(future.getDate()) // Dia atual -19
console.log(future.getDay()) // Dia da semana Numeral - 4
console.log(future.getHours()) // 15
console.log(future.getMinutes()) // 23
console.log(future.getSeconds()) // 0
console.log(future.toISOString()) // Formato Inter. ISO - 2037-11-19T18:23:00.000Z
console.log(future.getTime()) // Timestamp - 2142267780000
console.log(new Date(2142267780000)) // Ao contrário de cima timestamp - Thu Nov 19 2037 15:23:00 GMT-0300

console.log(Date.now()) // 1722710938505

future.setFullYear(2040) // trocando o ano
console.log(future) // Mon Nov 19 2040 15:23:00*/

/* // 06/08/24  178. Operations with dates
const future = new Date(2025, 10, 19, 15, 23)
console.log(future) // Wed Nov 19 2025 15:23:00 GMT-0300 (Horário Padrão de Brasília)
console.log(+future) // 1763576580000 - Usando + vira timestamp
console.log(Number(future)) // 1763576580000 - Usando Number também vira timestamp

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)
const days1 = calcDaysPassed(new Date(2025, 3, 14), new Date(2025, 3, 4))
console.log(days1) // 10 - Math abs deixa data positivo, mesmo sendo 10 dias menos/antes*/

/*// 08/08 trabalhando com njumeros 179 
const num = 434322342
const options = {
 style: 'currency',
 unit: 'celsius',
 currency: 'BRL'
}
console.log('Trump:     ', new Intl.NumberFormat('en-US', options).format(num))
console.log('Braza:     ', new Intl.NumberFormat('pt-BR', options).format(num))
console.log('Germany:     ', new Intl.NumberFormat('de-DE', options).format(num))*/

/* //08/08/24 181. Timers Set timeout and setInterval
const ingredients = ['olives', 'spinach']
const pizzaTimer = setTimeout(
 (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
 3000,
 ...ingredients
)
//Limpar timer se tiver spinach
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer)*/
setInterval(function () {
 const now = new Date()
 console.log(now)
}, 12000)

//sdS
