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

//133. Function returning functions  22/05/24
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
greet2('Hello')('Mr. nagys')
