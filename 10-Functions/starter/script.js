/*//132. Functions Accepting Callback Functions
const oneWord = function (qqerText) {
  return qqerText.replace(/ /g, '').toLowerCase()
}
const upperFirstWord = function (qqerText) {
  const [prime, ...restin] = qqerText.split(' ')
  return [prime.toUpperCase(), ...restin].join(' ')
}
//Higher-order function
const transformer = function (qqerText, fn) {
  console.log(`Original string: ${qqerText}`)
  console.log(`Transformed string: ${fn(qqerText)}`)
  console.log(`Created by the function: ${fn.name}`) //name aqui é para saber mesmo só o nome da função criada
}
transformer('Javascript is the best', upperFirstWord)
//Original string: Javascript is the best
//Transformed string: JAVASCRIPT is the best
//Created by the function: upperFirstWord
transformer('Javascript is the best', oneWord)
//Original string: Javascript is the best
//Transformed string: javascriptisthebest
//Created by the function: oneWord

const high5 = function () {
  console.log('🖐')
}
document.body.addEventListener('click', high5)
*/
/*//133. Function returning functions  22/05/24
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`)
  }
}
const greeterHey = greet('Hey') //Variável que vira uma function
greeterHey('Henrique') // Chamando a variável que é function
greeterHey('Daniele')
greet('Hello')('Najão') //Chamando a função que tem outra dentro, mas sem mencionar essa de dentro.

const greet2 = greeting => name => console.log(`${greeting} ${name}`)
greet2('Hello')('Mr. nagys')*/
/*//134. Call and aply methods

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    )
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name }) //Criou um array com objeto dentro
  }
}
lufthansa.book(239, 'Henrique Nagys') //Henrique Nagys booked a seat on lufthansa flight LH239
console.log(lufthansa.bookings) //[ { flight: 'LH239', name: 'Henrique Nagys' } ]

const euroWings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: []
}

const book = lufthansa.book

//Does NOT work
//book (23, 'Sarah Williams')

book.call(euroWings, 23, 'Sarah Williams')
console.log(euroWings)

book.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa)

const swiss = {
  name: 'Swiss Air lines',
  iataCode: 'LX',
  bookings: []
}

book.call(swiss, 583, 'Estela nagys')

//Apply method
const flightData = [583, 'Robin Hood']
book.apply(swiss, flightData)
console.log(swiss)

//Melhor usar o spread com o call ao invés de apply method
book.call(swiss, ...flightData)*/
/*//135. Bind methods 24/05/24
const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    )
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name }) //Criou um array com objeto dentro
  }
}
const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
}
const swiss = {
  airline: 'Swiss Air lines',
  iataCode: 'LX',
  bookings: []
}
const bookLT = lufthansa.book.bind(lufthansa) //Bind somente salva a função na variável, e não chama
const bookEW = lufthansa.book.bind(euroWings)
const bookSW = lufthansa.book.bind(swiss)
bookEW(23, 'Sir. Najaun') //Agora sim está chamando a função criada pelo bind

const bookEW23 = lufthansa.book.bind(euroWings, 23) //Valor pré definido
bookEW23('Najones the man') //Com o 23 pré-definido, ai só faltou o nome

//With event listeners
lufthansa.planes = 300 //ainda não tem no objeto, mas aqui criamos um
lufthansa.buyplane = function () {
  //Também criou essa function
  console.log(this)
  this.planes++
  console.log(this.planes)
}
//lufthansa.buyplane() > Precisa inserir isso para funcionar o click se chamar a função pelo clique evento. Mas pode trocar pelo bind(), ai não usa isso

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyplane.bind(lufthansa))

//partial application
const addTax = (rate, value) => value + value * rate
console.log(addTax(0.1, 200)) // 220

const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(100)) //123*/
/*//136. Coding Challenge #1 04/06/24
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const resposta = Number(
      prompt(
        `${this.question}\n${this.options.join(
          '\n'
        )}\n(Write your option number)`
      )
    )
    //Incrementar o valor da resposta inserido pelo prompt (antes eu usei o if aqui, mas esse do AND do jonas é melhor)
    typeof resposta === 'number' &&
      resposta < this.answers.length &&
      this.answers[resposta]++
    //if somente para casos em que o valor for maior que 3
    if (resposta > 3) console.log('somente nºs entre 0 e 3')
    this.displayResults()
    this.displayResults('string')
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers)
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`)
    }
  }
}
//Chamando a função dentro da poll pelo clique no botão
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll))
//Usando o call para trocar o valor de answers, somente para caso de teste digitanto o valor direto, hard code
poll.displayResults.call({ answers: [5, 2, 3] }, 'string')
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string')
*/
/*//CLosure aula 1
const secureBooking = function () {
  let passengerCount = 0
  return function () {
    passengerCount++
    console.log(`${passengerCount} passengers`)
  }
}
const booker = secureBooking()
booker() //1 passengers
booker() //2 passengers
booker() //3 passengers
console.dir(booker) //Checa tudo sobre a function, incluindo o closure*/
/*//Closure aula 2
//EXAMPLE 1
let f //Global scope, ai todas podem acessar
const g = function () {
  const a = 3
  f = function () {
    console.log(a * 2) //6
  }
}

const h = function () {
  const b = 4
  f = function () {
    console.log(b * 2) //8
  }
}

g()
f()
console.dir(f) //Closure(g) a = 3

//Re-assigning f function
h()
f()
console.dir(f) //Closure(h) b = 4
//EXAMPLE 2
const boardPassengers = function (n, wait) {
  //const perGroup = n / 3
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`)
    console.log(`There are 3 groups, each with ${perGroup} passengers`)
  }, wait * 1000)
  console.log(`Will start boarding in ${wait} seconds`)
}
const perGroup = 1000
boardPassengers(180, 3)*/
//140. Coding Challenge #2 06/06/2024 Quinta - Coding Challenge #2
/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
;(function () {
  const textu = document.querySelector('h1')
  textu.style.color = 'red'
  window.document.body.addEventListener('click', function () {
    textu.style.color = 'blue'
  })
})()

//Se meu function do click no body estivesse fora, não daria pra usar a const textu, teria que criar outra.
