'use strict';
/*
//sÓ FUNCIONAM SE ESTIVEREM APÓS AS VARIÁVEIS, ANTES NÃO FUNFA
console.log(me);
console.log(job);
console.log(year);
var me = 'Jonas';
let job = 'teacher';
const year = 1991;*/

/*
// Functions
console.log(Declaration(2, 3)); //sim FUNCIONA
console.log(Expression(2, 3)); //NÃO FUNCIONA
console.log(Arrow(2, 3)); //NÃO FUNCIONA

//Funciona pois essa é uma function declaration, pode ser chamada antes de sua declaração no código
function Declaration(a, b) {
  return a + b;
}

//Não funciona, pois é Function Expression, só pode ser chamada depois de sua declaração no código.
const Expression = function (a, b) {
  return a + b;
};

//Não funciona, pois é uma arrow function que só pode ser chamada depois de sua declaração no código.
var Arrow = (a, b) => a + b;*/

/*
//Teste de uso após o IF
if (!numProducts) deleteShoppingCart();
var numProducts = 10; //Com var funciona depois do if OK
//let numProducts = 10; //let não funciona declarar depois do if [error]
//const numProducts = 10; //Const não funciona declarar depois do if [error]
function deleteShoppingCart() {
  console.log('All products deleted!');}*/

//Se digitar window no console navegador aparece todos os js usados no código. Porém só vair aparecer os que tiverem sido criados com VAR. pois somente esses vão ter criado a property on window object
var x = 1; //true
let y = 2; //false
const z = 3; //false
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
