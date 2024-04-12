'use strict'
//1.	Copiar arrays ou objetos: Você pode usar o spread para copiar arrays ou objetos, ou para mesclar arrays ou objetos.
const originalArray = [1, 2, 3]
const copiedArray = [...originalArray]
console.log(copiedArray)

const originalObject = { a: 1, b: 2 }
const copiedObject = { ...originalObject }
console.log(copiedObject)

//2.	Combinar arrays ou objetos: O spread pode ser usado para combinar arrays ou objetos em um novo array ou objeto.
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]
console.log(combinedArray)

const object1 = { a: 1, b: 2 }
const object2 = { c: 3, d: 4 }
const combinedObject = { ...object1, ...object2 }
console.log(combinedObject)

//3.	Passar argumentos para funções: O spread pode ser usado para passar elementos de um array como argumentos para uma função.
const numbers = [1, 2, 3]
console.log(Math.max(...numbers)) // Saída: 3
