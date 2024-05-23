'use strict'
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
//134. Call and aply methods

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
book.call(swiss, ...flightData)
