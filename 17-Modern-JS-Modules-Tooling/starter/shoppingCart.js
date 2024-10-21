//Exporting Module
/* //----------------------> Aula 18/09/24
console.log('Exporting Module')

const shippingCost = 10
export const cart = []

export const addToCart = function (product, quantity) {
 cart.push({ product, quantity })
 console.log(`${quantity} ${product} added to cart`)
}

const totalPrice = 198
const totalQuantity = 20

export { totalPrice, totalQuantity as tq }

export default function (product, quantity) {
 cart.push({ product, quantity })
 console.log(`${quantity} ${product} added to cart`)
}*/

//----------------------> Aula 274 dia 21/10/24
console.log('Exporting Module')

//Blocking code
console.log('Start Fetching users')
await fetch('https://jsonplaceholder.typicode.com/users')
console.log('Finish Fetching')

const shippingCost = 10
export const cart = []

export const addToCart = function (product, quantity) {
 cart.push({ product, quantity })
 console.log(`${quantity} ${product} added to cart`)
}

const totalPrice = 198
const totalQuantity = 20

export { totalPrice, totalQuantity as tq }

export default function (product, quantity) {
 cart.push({ product, quantity })
 console.log(`${quantity} ${product} added to cart`)
}
