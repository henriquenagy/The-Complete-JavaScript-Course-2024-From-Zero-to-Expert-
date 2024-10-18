//Importing Module

/* // -------------- Método inicial básico
import './shoppingCart.js' //Se colocar por primeiro, puxa esse dados por primeiro e depois os do próprio arquivo. Olhe o console e verás:
console.log('Importing Module') //Exporting Module > Importing Module*/

/* // ------------ Método intermediário, trocando nome das variáveis e chamando função
import { addToCart, totalPrice as price, tq } from './shoppingCart.js'
addToCart('bread', 5)
console.log(price, tq)*/

/* // --------------- Método intermediário 2
import * as ShoppingCart from './shoppingCart.js' //* vai "pegar tudo" que foi exportado do arquivo. O import * as agrupa tudo que foi exportado de um módulo em um único objeto.
ShoppingCart.addToCart('bread', 5)
console.log(ShoppingCart.totalPrice)*/

/* // --------------- Método 3
import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js'
add('pizza', 2)
console.log(price)*/

// --------------- Método 4
import add, { cart } from './shoppingCart.js'
add('pizza', 2)
add('pizza', 5)
add('apples', 3)

console.log(cart)
