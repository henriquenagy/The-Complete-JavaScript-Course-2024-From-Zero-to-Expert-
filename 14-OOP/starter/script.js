'use strict'
/* //Constructor Function Dissecado
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
construFuncs()*/

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

/*  ///////////////////////  Coding Challenge #1  Dia 07/09 /////////////////////// 

1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h


class Car {
 constructor(make, speed) {
  this.make = make
  this.speed = speed
 }
 //Methods will be added to .prototype property
 accelerate() {
  console.log(`${this.make} is going at ${(this.speed += 10)}km/h`)
 }
 brake() {
  console.log(`${this.make} reduce speed and now is ${(this.speed -= 5)}km/h`)
 }
}

const BMW = new Car('BMW', 120)
const Mercedez = new Car('Mercedez', 95)
console.log(BMW, Mercedez)

BMW.accelerate()
BMW.brake()
BMW.accelerate()
BMW.accelerate()
Mercedez.accelerate()
Mercedez.brake()

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
*/

// Aula 215 Dia 08/09

//testando get e set 1
const account = {
 Owner: 'Nagys',
 movements: [200, 530, 120, 300],
 get latest() {
  return this.movements.slice(-1).pop()
 },
 set latest(mov) {
  this.movements.push(mov)
 }
}

console.log(account.latest) // 300

account.latest = 50
console.log(account.movements) // (5) [200, 530, 120, 300, 50]

//Testando get e set 2
class Personas {
 constructor(fullname, birthYear) {
  this.fullname = fullname
  this.birthYear = birthYear
 }
 get age() {
  return 2037 - this.birthYear
 }

 set fullname(name) {
  console.log(name)

  if (name.includes(' ')) this._fullname = name
  //_ não é biblioteca ou do JS, é só convenção de uso apra ñ usar o mesmo nome e dar erro
  else alert(`${name} is not a full name`)
 }
 get fullname() {
  return this._fullname
 }
}

const nagys = new Personas('Nagys Martinez', 1994) // Personas {_fullname: 'Nagys Martinez', birthYear: 1994}
const dani = new Personas('dani', 1994) // set fullname retorna undefined
console.log(nagys.age) //43
console.log(nagys) //Ñ retorna de imediato, tem q abrir o array ai mostra o age clicando nos (...)
