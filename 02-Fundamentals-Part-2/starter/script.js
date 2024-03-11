/*
'use strict'
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)*/

/*Quando você chama fruitProcessor(5, 0);, a função fruitProcessor é executada com os argumentos 5 e 0.
Dentro da função, a string juice é criada usando os valores dos parâmetros apples e oranges.
Em seguida, a instrução return juice; é executada. Isso faz com que a função retorne o valor da string juice.
O valor retornado pela função ("Suco com 5 maçãs e 0 laranjas.") é armazenado na variável appleJuice.
Por fim, console.log(appleJuice); exibe o valor de appleJuice no console, que é o resultado da função fruitProcessor.
O mesmo processo acontece quando você chama fruitProcessor(2, 4);. Nesse caso, o valor retornado pela função é "Suco com 2 maçãs e 4 laranjas.", que é armazenado na variável appleOrangeJuice, e então exibido no console usando console.log(appleOrangeJuice);.

Portanto, const appleJuice = fruitProcessor(5, 0); executa a função e armazena o resultado, enquanto console.log(appleJuice); mostra o resultado da função que está armazenado em appleJuice.*/
/*
'use strict'
//Function declaration
const age1 = calcAge1(1994) //pode colocar o calculo antes ou depois da function
function calcAge1(birthYear) {
  return 2024 - birthYear*/
/*forma completa
const age = 2024 - birthYear
return age
*/ /*
}
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

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}
/* //OU FORMA ENXUTA PELO ARROW
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

//TODAYS'S CHALLENGE
const najaun = {
  firsName: 'Henrique',
  job: 'Webdesigner',
  friends: ['jackson', 'lowie', 'dani'],
  birthYear: 1994,
  hasDriversLicense: false,
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
console.log(najaun.getSummary())
