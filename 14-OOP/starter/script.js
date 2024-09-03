'use strict'
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
/*1. New {} is created, ou seja, criou um empty object novo
2. Function Person is called, e o this passa a ser o objeto novo {}
3. {} linked to a prototype
4. function automatically return {}*/
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
/* Person {firstName: 'Nagys', birthYear: 1994}
birthYear: 1994
firstName: "Nagys"
[[Prototype]] : Object
calcAge : ƒ ()
species: "Homo Sapiens"*/
console.log(nagys.species, dirclei.species) // Já pega direto - Homo Sapiens Homo Sapiens

//Porém vc pode notar que esses inseridos fora do objeto principal, ñ faz parte dos nomes inseridos usando a template orifinal
console.log(nagys.hasOwnProperty('firstName')) // true
console.log(nagys.hasOwnProperty('species')) // false
