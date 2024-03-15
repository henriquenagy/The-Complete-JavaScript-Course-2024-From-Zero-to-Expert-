// Remember, we're gonna use strict mode in all scripts now!
'use strict'
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?
// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const temperatures = [
  3,
  -2,
  -6,
  -1,
  'error',
  'wrong',
  9,
  13,
  17,
  15,
  14,
  9,
  'fatal',
  5,
  'caguei'
]
let maior = 0
let menor = 0
let errorCounter = 0

for (let i = 0; i < temperatures.length; i++) {
  if (!isNaN(temperatures[i])) {
    if (temperatures[i] > maior) maior = temperatures[i]
    if (temperatures[i] < menor) menor = temperatures[i]
  } else if (isNaN(temperatures[i])) {
    errorCounter++
  }
}
console.log(
  `The higher temperature was ${maior} and the lowest ${menor}, so the amplitue was ${
    maior - menor
  }`
)
console.log(`Times that errors occured: ${errorCounter}`)
