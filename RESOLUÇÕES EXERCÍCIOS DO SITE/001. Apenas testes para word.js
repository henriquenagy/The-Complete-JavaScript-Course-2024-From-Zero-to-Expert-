//partial application
const addTax = (rate, value) => value + value * rate
console.log(addTax(0.1, 200)) // 220

const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(100)) //123
