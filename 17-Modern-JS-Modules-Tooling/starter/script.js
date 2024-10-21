//Importing Module

/* //----------------------> Aula 18/09/24
// -------------- Método inicial básico
import './shoppingCart.js' //Se colocar por primeiro, puxa esse dados por primeiro e depois os do próprio arquivo. Olhe o console e verás:
console.log('Importing Module') //Exporting Module > Importing Module

// ------------ Método intermediário, trocando nome das variáveis e chamando função
import { addToCart, totalPrice as price, tq } from './shoppingCart.js'
addToCart('bread', 5)
console.log(price, tq)

// --------------- Método intermediário 2
import * as ShoppingCart from './shoppingCart.js' //* vai "pegar tudo" que foi exportado do arquivo. O import * as agrupa tudo que foi exportado de um módulo em um único objeto.
ShoppingCart.addToCart('bread', 5)
console.log(ShoppingCart.totalPrice)

// --------------- Método 3
import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js'
add('pizza', 2)
console.log(price)

// --------------- Método 4
import add, { cart } from './shoppingCart.js'
add('pizza', 2)
add('pizza', 5)
add('apples', 3)

console.log(cart)*/

/* //----------------------> Aula 274 dia 21/10/24
//---- Forma básica com top level await
 const res = await fetch('https://jsonplaceholder.typicode.com/posts') // Faz a requisição HTTP
const data = await res.json() // Converte a resposta para JSON
console.log(data) // Exibe os dados no console

 //---- Forma async await padrão CARREGA MAIS RÁPIDO
const getLastPost = async function () {
 const res2 = await fetch('https://jsonplaceholder.typicode.com/posts')
 const data2 = await res2.json()
 console.log(data2)
}
getLastPost()

//---- Forma async await COMPLETA
const getLastPost3 = async function () {
 const res3 = await fetch('https://jsonplaceholder.typicode.com/posts')
 const data3 = await res3.json()

 return { title: data3.at(-1).title, text: data3.at(-1).body }
}

//Esse não
//const lastPost = getLastPost3()
//console.log(lastPost) // Promise {<pending>}  >>>  Vai retornar a promise, não consome ela
//lastPost.then(last => console.log(last)) //Not very Clean, avoid it

//Esse abaixo o melhor
const lastPost2 = await getLastPost3()
console.log(lastPost2)*/

//----------------------> Aula 275 dia 21/10/24
const ShoppingCart2 = (function () {
 const cart = []
 const shippingCost = 10
 const totalPrice = 237
 const totalQuantity = 20

 const addToCart = function (product, quantity) {
  cart.push({ product, quantity })
  console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`)
 }

 const orderStock = function (product, quantity) {
  cart.push({ product, quantity })
  console.log(`${quantity} ${product} ordered from supplier`)
 }

 return { addToCart, cart, totalPrice, totalQuantity }
})()

ShoppingCart2.addToCart('apple', 2)
ShoppingCart2.addToCart('pizza', 4)
console.log(ShoppingCart2)
