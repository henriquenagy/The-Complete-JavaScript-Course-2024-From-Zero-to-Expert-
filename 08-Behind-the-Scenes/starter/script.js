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

/*  02/04/24 ----------------------------------------
  //Se digitar window no console navegador aparece todos os js usados no código. Porém só vair aparecer os que tiverem sido criados com VAR. pois somente esses vão ter criado a property on window object
var x = 1; //true
let y = 2; //false
const z = 3; //false
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

//----------------------------------- 03/04/2024  USO DO THIS
/* ERRO AO USAR ARROW FUNCTION COM O THIS
var firstName = 'Matilda'; //Aqui vai aparecer dentro do greet(), ERRO FATAL
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  //arrow function ñ dá para usar o this, pois ele pega o global var
  greet: () => {
    console.log(this); //ERROR vai pegar o global object, e não o de dentro
    console.log(`Hey ${this.firstName}`); //ERRO FATAL vai pegar a matilda global do Var
  },
};
jonas.greet();*/

/*
// Uso do this em uma função normal dentro de outra função normal
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
    //O pulo do gato aqui é criar uma varíavel que seja igual ao this, ai funciona
    const self = this; // self or that
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
};
jonas.calcAge();*/
/*
// Uso do this em uma arrow function dentro de outra função normal
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
    // Aqui no arrow dentro de função dá certo,ñ precisa criar outra variável que represente o this, já pega direto
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
};
jonas.calcAge();*/

//----------------------------Object.assign()   04-04-2024
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.age = 29;
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
