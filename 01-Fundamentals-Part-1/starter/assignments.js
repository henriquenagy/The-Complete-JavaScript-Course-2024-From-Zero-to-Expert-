//To see in DOM console

/* TEST 1
let Country = 'Brasil'
let Continent = 'North america'
let Population = 200000000
console.log(Country, Continent, Population)
*/

/*let javascriptIsFun = true
console.log(javascriptIsFun)

console.log(typeof true)
console.log(typeof javascriptIsFun)
console.log(typeof 23)
console.log(typeof 'jonas')

let children
console.log(typeof children)*/

// BMI MASS CALCULATOR
/*
const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

let BMIMark = massMark / (heightMark * heightMark)
let BMIJohn = massJohn / (heightJohn * heightJohn)

console.log(`The Mark BMI is: ${BMIMark}, and John BMI is: ${BMIJohn}`)

if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI (${BMIMark.toFixed(
      2
    )}) is higher than John's (${BMIJohn.toFixed(2)})!`
  )
} else {
  console.log(
    `John's BMI (${BMIJohn.toFixed(
      2
    )}) is higher than Mark's (${BMIMark.toFixed(2)})!`
  )
}
/*
const markHigherBMI = BMIMark > BMIJohn

console.log(typeof markHigherBMI)
console.log(markHigherBMI)

if (BMIMark > BMIJohn){
console.log(true)
} else {
console.log(false)
}

*/
/*
console.log('String with \n multiple \n lines1')
console.log(`String with 
multiple 
lines`)*/

/*const age = 11

if (age >= 18 /*true) {
  console.log('Sarah can start drivig license 🚗')
} /* false else {
  const yearsleft = 18 - age
  console.log(Boolean(0))`Sarah is too young. Wait another ${yearsleft} years.`)
}*/

//type coercion
/*
console.log('i am ' + 23 + ' years old') //i am 23 years old
console.log('23' - '10' - 3) //10
console.log('23' / '2') //11.5

let n = '1' + 1
n = n - 1
console.log(n) //10
*/
/*
//5 Falsy values: 0, ‘  ’, undefined, null, NaN
console.log(Boolean(0)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean('Nagys')) //true
console.log(Boolean({})) //true

const money = 0
if (money) {
  //0 is false, so it goes directly to else
  console.log("Don't spend it all")
} else {
  console.log('you should get a job')
}*/
/*
const age = 18
if (age === 18) console.log('You just became an adult :D')

const favourite = Number(prompt('Whats your favourite number?'))
console.log(favourite)
console.log(typeof favourite)

if (favourite === 23) {
  // '23' == 23
  console.log('Cool! ' + favourite + ' is an amazing number')
}
*/
/*
const age = 18
const drink = age >= 18 ? 'wine 🍷' : 'water 🥛'
console.log(drink)

let drink2
if (age => 18) {
  drink2 = 'wine 🍷'
} else {
  drink2 = 'water 🥛'
}

console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🥛'}`)*/

/* Write your code below. Good luck! 🙂 */
const bill = 40
let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
)
