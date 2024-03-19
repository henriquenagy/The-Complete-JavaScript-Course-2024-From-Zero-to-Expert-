/* -------------------------------------------------------------
'use strict'
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice
}
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)
const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)*/

/* -------------------------------------------------------------
//Function declaration
const age1 = calcAge1(1994) //pode colocar o calculo antes ou depois da function
function calcAge1(birthYear) {
  return 2024 - birthYear*/
/*forma completa
const age = 2024 - birthYear
return age
}

/*
//Function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear
}
const age2 = calcAge2(1990) // o cálculo deve vir após a function
console.log(age1, age2)
*/

/*
//Arrow function
const calcAge3 = birthYear => 2024 - birthYear
const age3 = calcAge3(1994)
console.log(age3)

const yearsTillRetirement = (
  birthYear //ñ precisa usar () no birthyear
) => {
  const age = 2024 - birthYear
  const retirement = 65 - age
  return retirement
}
console.log(yearsTillRetirement(1994))

const yearsTillRetirement2 = (
  birthYear,
  firstName //precisa usar () pois tem 2
) => {
  const age4 = 2024 - birthYear
  const retirement2 = 65 - age4
  return `${firstName} retires in ${retirement2} years`
}
console.log(yearsTillRetirement2(1994, 'nagy'))
console.log(yearsTillRetirement2(1984, 'velhones'))
*/

//função dentro da outra
/*
'use strict'
function cutFruitPieces(fruit) {
  return fruit * 4
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)
  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`
  return juice
}
console.log(fruitProcessor(2, 3))
*/

/* Write your code below. Good luck! 🙂 */

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

//test1
let scoreDolphins = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(85, 54, 41)

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
  } else {
    console.log('No team wins...')
  }
}
checkWinner(scoreDolphins, scoreKoalas)

//test2
scoreDolphins = calcAverage(85, 54, 41)
scoreKoalas = calcAverage(23, 34, 27)
console.log(scoreDolphins, scoreKoalas)
checkWinner(scoreDolphins, scoreKoalas)
*/

/*const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}*/
/*
//OU FORMA ENXUTA PELO ARROW
const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2)
const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, totals)*/

//11-03-24 Dot vs. Bracket Notation
/*
const nagys = {
  firstName: 'Henrique',
  lastName: 'Martins',
  age: 2024 - 1994,
  job: 'Webdesigner frontend',
  friends: ['jackson', 'lowie', 'dani']
}

console.log(nagys)
console.log(nagys.lastName) //Forma com pontos
console.log(nagys['lastName']) //Forma com Colchetes

const nameKey = 'Name'
console.log(nagys['first' + nameKey]) //pode usar uma variável dentro do colchete
console.log(nagys['last' + nameKey])

const interstedIn = prompt(
  'What do you want to know about jonas? Choose between firstName, lastName, age, job and friends'
)
// ASSIM NÃO FUNFA console.log(nagys.interestedIn)

if (nagys[interstedIn]) {
  console.log(nagys[interstedIn])
} else {
  console.log(
    'Wrong request!Choose between firstName, lastName, age, job and friends'
  )
}
//Declarar novos valores para o objeto do nagys, com ponto e colchete
nagys.location = 'Peruibeach' //via PONTOSage
nagys['instagram'] = '@hnamar' //via COLCHETES
console.log(nagys)

console.log(
  `${nagys.firstName} has ${nagys.friends.length} friends, and his best friend is called ${nagys.friends[0]}`
)*/

//OBJECT METHODS - INSERINDO FUNÇÃO DENTRO DE OBJETO
/*const najones = {
  firsName: 'Najaun',
  birth: 1994,
  calcAge: function (birth) {
    return 2024 - birth
  }
}
console.log(najones.calcAge(1994)) //método ponto
console.log(najones['calcAge'](1994)) //método colchete
*/

/*
const najones = {
  firsName: 'Najaun',
  birth: 1994,
  calcAge: function () {
    console.log(this) //this chama o valor dentro do próprio objeto, apenas teste
    return 2024 - this.birth
  }
}
console.log(najones.calcAge())
*/
/*
const najones = {
  firsName: 'Najaun',
  birth: 1994,
  calcAge: function () {
    this.age = 2024 - this.birth //this.age é como se fosse declarar um novo objeto em najones.age = calculo qualquer, igual em najones.cidadeAtual = peruibe
    return this.age
  }
}
console.log(najones.calcAge()) //chamando pela função
console.log(najones.age) // chamando pelo objeto que acabei de inserir via função
*/
/*
//TODAYS'S CHALLENGE
const najaun = {
  firsName: 'Henrique',
  job: 'Webdesigner',
  friends: ['jackson', 'lowie', 'dani'],
  birthYear: 1994,
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2024 - this.birthYear
    return this.age
  },
  getSummary: function () {
    return `${this.firsName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
  }
}
console.log(najaun.getSummary())*/

//12-03-24 CHALLENGE BMI
//PRIMEIRO É O MEU, O SEGUNDO É DO PROF. JONAS
/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  }
}

console.log(
  ` ${john.fullName}'s BMI (${john.calcBMI()})  is ${
    john.calcBMI() > mark.calcBMI() ? 'higher' : 'lower'
  } than ${mark.fullName}'s BMI (${mark.calcBMI()})!`
)*/
/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  }
}

mark.calcBMI() //CHAMOU a função, sem isso a função não se chama sozinha, ai dá errado
john.calcBMI()

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  )
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  )
}
*/

/*
//USO DO FOR PARA INTERAGIR COM OBJETOS e ARRAYS
const nagys = [
  'nagys',
  'martins',
  2024 - 1994,
  'Webdesigner',
  ['Mel', 'Bella', 'Golden'],
  true
]
const testePreencher = []
//Reading from Nagys array
for (let i = 0; i < nagys.length; i++) {
  console.log(nagys[i], typeof nagys[i])
  //Fiiling Teste Array - metodo 1 e 2 de baixo
  //testePreencher[i] = typeof nagys[i]
  testePreencher.push(typeof nagys[i])
}
console.log(testePreencher)

const years = [1992, 1994, 1987, 1985]
const ages = []

for (i = 0; i < years.length; i++) {
  ages.push(2024 - years[i])
}
console.log(ages)
*/
/*
//USING CONTINUE & BREAK
const nagys = [
  'nagys',
  'martins',
  2024 - 1994,
  'Webdesigner',
  ['Mel', 'Bella', 'Golden'],
  true
]
console.log('-----IF [i] IS NOT A STRING, CONTINUE/DO IT AGAIN-----')
for (i = 0; i < nagys.length; i++) {
  if (typeof nagys[i] !== 'string') continue
  console.log(nagys[i], typeof nagys[i])
}
console.log('-----IF [i] IS A NUMBER, BREAK/STOP THIS IF-----')
for (i = 0; i < nagys.length; i++) {
  if (typeof nagys[i] === 'number') break
  console.log(nagys[i], typeof nagys[i])
}*/
/*
//Aula do dia 14-03  [48. Looping Backwards and Loops in Loops]
const nagys = [
  'nagys',
  'martins',
  2024 - 1994,
  'Webdesigner',
  ['Mel', 'Bella', 'Golden'],
  true
]

for (let i = nagys.length - 1; i >= 0; i--) {
  console.log(i, nagys[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------------------Exercise number ${exercise}`)
  for (let repetition = 1; repetition < 6; repetition++) {
    console.log(`repetition number ${repetition} 💪`)
  }
}

//Using While Loop - sempre lembrar de usar o ++ no final, caso contrário vai travar o navegador
let rep = 1
while (rep <= 10) {
  console.log(`WHILE: ligting weights repetitions ${rep} 🤜`)
  rep++
}
*/
/*
//Função com cálculo if.else
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []
//Inserindo números dentro de variáveis
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]) //Só para encurtar a escrita abaixo
  tips.push(tip)
  totals.push(tip + bills[i])
}
console.log(bills, tips, totals)
//Usando o argumento da função dentro da função
const calcAverage = function (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  console.log(sum)
  return sum / arr.length
}
console.log(calcAverage([2, 3, 7])) //Aleatory
console.log(calcAverage(totals))
console.log(calcAverage(tips))
*/

/*--------------------------------------------------------------------
//Aula dia 19-03 Debugging
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees Celsius'))
  }
  console.table(measurement)
  const kelvin = measurement.value + 273
  return kelvin
}

console.log(measureKelvin())
*/

//MÉTODO 1 COM FUNÇÃO VAZIA
const printForecast1 = function () {
  const arr = [12, 5, -5, 0, 4]
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} ºC in ${i + 1} days`)
  }
}
console.log(printForecast1())

//MÉTODO 2 COM FUNÇÃO USANDO O ARR APÓS A FUNÇÃO
const printForecast2 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} ºC in ${i + 1} days`)
  }
}
const arr = [12, 5, -5, 0, 4]
console.log(printForecast2(arr))
