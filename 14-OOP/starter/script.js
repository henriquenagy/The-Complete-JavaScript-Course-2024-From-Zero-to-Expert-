'use strict'
//Constructor Function Dissecado
const construFuncs = function () {
 const Person = function (firstName, birthYear) {
  this.firstName = firstName
  this.birthYear = birthYear
 }
 const nagys = new Person('Nagys', 1994) // Object __proto__
 const dirclei = new Person('Dirclei', 1975) // Object __proto__

 //Usa as infos do constructor, e passa aos objects somente quando chamado
 Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear)
 }

 nagys.calcAge() // 30
 console.log(nagys) // Person {firstName: 'Nagys', birthYear: 1994} - Ñ aparece calcage

 console.log(nagys.__proto__ === Person.prototype) // true
 console.log(Person.prototype.isPrototypeOf(nagys)) // true
 console.log(Person.prototype.isPrototypeOf(Person)) // false

 Person.prototype.species = 'Homo Sapiens'
 console.log(nagys, dirclei) // species: "Homo Sapiens" - Aparece em prototype
 console.log(nagys.species, dirclei.species) // Já pega direto - Homo Sapiens Homo Sapiens
 console.log(nagys.hasOwnProperty('firstName')) // true
 console.log(nagys.hasOwnProperty('species')) // false

 console.log(nagys.__proto__) // {species: 'Homo Sapiens', calcAge: ƒ}
 console.log(nagys.__proto__.__proto__) // {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
 console.log(nagys.__proto__.__proto__.__proto__) //Null

 console.log(Person.prototype.constructor) //ƒ (firstName, birthYear) {this.firstName = firstName;  this.birthYear = birthYear; } - mostra o constructor completo
 console.dir(Person.prototype.constructor) //ƒ Person(firstName, birthYear) - mostra só a função

 const arr = [3, 7, 9, 4] // é o mesmo que new Array, pois já herda todo o prototype veja o link MDN abaixo array filter
 console.log(arr.__proto__) //[at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …] tudo oq podemos usar em array (filter, fill, find, flatmap) já puxa tudo de prototype padrão
 console.log(arr.__proto__ === Array.prototype) //true
 console.log(arr.__proto__.__proto__) //{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
}
construFuncs()
/* /////////////////////// Dia 03/09 aula 209 e 210 ///////////////////////////
const Person = function (firstName, birthYear) {
 //console.log(this) // sem nada de dados, retorna só Person

 //Instance properties ↓
 this.firstName = firstName
 this.birthYear = birthYear

 //Never do this ↓ tem q ser via prototype
 //this.calcAge = function () { console.log(2024 - this.birthYear)}
}
const nagys = new Person('Nagys', 1994)
const dirclei = new Person('Dirclei', 1975)
1. New {} is created, ou seja, criou um empty object novo
2. Function Person is called, e o this passa a ser o objeto novo {}
3. {} linked to a prototype
4. function automatically return {}
console.log(nagys, dirclei) // Person {firstName: 'Nagys', birthYear: 1994} etc...

const nonEkiziste = 'Notienes' //Sem os dados retorna false
console.log(nagys instanceof Person) // true
console.log(nonEkiziste instanceof Person) // false

//Prototype inheritance = embora ñ esteja dentro de Person, dá para adicionar ele fora e acessar
console.log(Person.prototype) //{}  -  function (firstName, birthYear) - Ñ tem ainda
Person.prototype.calcAge = function () {
 console.log(2024 - this.birthYear)
}
//agora se quiser calc a idade, faz igual abaixo
nagys.calcAge() // 30
console.log(nagys) // Mas assim só vai pegar os dados originais de person, sem calcAge > Person {firstName: 'Nagys', birthYear: 1994}

console.log(Person.prototype) // Aqui porém já mostra que tem o calcAge, mas fora dele

//__proto__: É um acessor que todo objeto em JS tem e que aponta para o protótipo do objeto. O protótipo é o objeto a partir do qual o objeto foi criado, ou seja, o "modelo" ou "template" do objeto.
//nagys.__proto__: Acessa o protótipo do objeto nagys, que é Person.prototype, e mostra os métodos e propriedades definidos lá, como calcAge.
console.log(nagys.__proto__) // {calcAge: f}

//O operador === verifica se os dois operandos são o mesmo objeto na memória. Como nagys.__proto__ e Person.prototype apontam para o mesmo objeto, o resultado é true.
console.log(nagys.__proto__ === Person.prototype) // true
console.log(Person.prototype.isPrototypeOf(nagys)) // true
console.log(Person.prototype.isPrototypeOf(Person)) // false

Person.prototype.species = 'Homo Sapiens'
console.log(nagys, dirclei) // Na primeira parte do console não aparece. Vc tem que ir abrindo as setas/opções e ver em prototype que aparece o novo item species adicionado
Person {firstName: 'Nagys', birthYear: 1994}
birthYear: 1994
firstName: "Nagys"
[[Prototype]] : Object
calcAge : ƒ ()
species: "Homo Sapiens"
console.log(nagys.species, dirclei.species) // Já pega direto - Homo Sapiens Homo Sapiens

//Porém vc pode notar que esses inseridos fora do objeto principal, ñ faz parte dos nomes inseridos usando a template orifinal
console.log(nagys.hasOwnProperty('firstName')) // true
console.log(nagys.hasOwnProperty('species')) // false*/

//
