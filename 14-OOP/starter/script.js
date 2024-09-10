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

/*///////////////////////// Aula 215 Dia 08/09 ///////////////////////

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
*/

/* ///////////////////////// 09-09-24 Aula 2016/////////////////////////
class PersonCl {
 constructor(fullName, birthYear) {
  this.fullName = fullName
  this.birthYear = birthYear
 }

 // Instance methods calcAge() e greet ()
 calcAge() {
  console.log(2037 - this.birthYear)
 }
 greet() {
  console.log(`Hey ${this.fullName}`)
 }

 // Static method
 static hey() {
  console.log('Hey there 👋')
 }
}
const walter = new PersonCl('Walter White', 1965)
//Se chamar pelo nome da pessoa que vc criou não funciona
PersonCl.hey() // Hey there 👋
walter.hey() // walter.hey is not a function ERROR*/

/* /////////////////////////  Aula 217 Object Create ///////////////////////// 
const personProto = {
 suaIdade() {
  console.log(2024 - this.nascimento)
 },
 seusDados(completus, nascimento) {
  this.completus = completus
  this.nascimento = nascimento
 }
}

const najera = Object.create(personProto)
console.log(najera) // VAZIO {}
//Adiciona os dados manualmente
najera.completus = 'H najao'
najera.nascimento = 1994
najera.suaIdade() //30
console.log(najera.__proto__ === personProto) // true

const danis = Object.create(personProto)
//Adicionando os dados via função dentro de personProto
danis.seusDados('Danis sirvas', 1994)
danis.suaIdade() // 30*/

/* /////////////// ------------------- ANOTAÇÕES ALUNO JONAS -----/////////////////////
console.log(`--- Function Expression ---`)
// Function Expression
const Person1 = function (firstName, birthYear) {
 // properties
 this.firstName = firstName
 this.birthYear = birthYear
}

// Methods created on prototype
Person1.prototype.calcAge = function () {
 return (this.age = new Date().getFullYear() - this.birthYear)
}

// Class chaining
const Student = function (firstName, birthYear, course) {
 Person1.call(this, firstName, birthYear)
 this.course = course
}

// Creating prototype link - overwrites student prototype
Student.prototype = Object.create(Person1.prototype)
Student.prototype.constructor = Student

// Student methods after link
Student.prototype.introduce = function () {
 console.log(
  `My name is ${this.firstName}, I am ${this.calcAge()} years old and I am studying ${this.course}`
 )
}

// Instaniate
const John = new Person1(`John`, 1990)
const mike = new Student(`Mike`, 2020, `Computer Science`)
console.log(John, mike)
mike.introduce()
console.log(``)

// ---------------- ES6 Classes ---------------- //
// Class expression
const Person2 = class {
 // Properties
 constructor(firstName, birthYear) {
  this.firstName = firstName
  this.birthYear = birthYear
 }

 // Methods
 calcAge() {
  return (this._age = new Date().getFullYear() - this.birthYear)
 }

 // Getters & Setters
 get age() {
  return this._age ? this._age : this.calcAge()
 }

 set age(birthYear) {
  this.birthYear = birthYear
  this.calcAge()
 }

 // Static method
 static wave() {
  console.log(`👋👋👋`)
  console.dir(this)
 }
}

// Class Chaining
const Student2 = class extends Person2 {
 constructor(firstName, birthYear, course) {
  // Super always first
  super(firstName, birthYear)
  this.course = course
 }

 introduce() {
  console.log(
   `My name is ${this.firstName}, I am ${this.calcAge()} years old and I am studying ${this.course}`
  )
 }

 // Overwriting parent method
 calcAge() {
  this._age = new Date().getFullYear() - this.birthYear

  console.log(`I am ${this._age} years old but as a student, I feel more like ${this._age + 10}`)
  return this._age
 }
}

// if child has no new parameters
const Student2_1 = class extends Person2 {
 // Can still accept new methods
 introduce() {
  console.log(
   `My name is ${this.firstName}, I am ${this.calcAge()} years old and I am studying ${this.course}`
  )
 }
}

// Instaniate
const bridget = new Person2(`Bridget`, 1991)
const billy = new Student2(`Billy`, 1995, `Computer Science`)
const billy2 = new Student2_1(`Billy`, 1995)
console.log(bridget, billy, billy2)
billy.calcAge()
console.log(``)

//////////////////////////////////////////////////

// Class declaration
class Person3 {
 // Properties
 constructor(firstName, birthYear) {
  this.firstName = firstName
  this.birthYear = birthYear
 }

 // Methods
 calcAge() {
  return (this._age = new Date().getFullYear() - this.birthYear)
 }

 // Getters & Setters
 get age() {
  return this._age ? this._age : this.calcAge()
 }

 set age(birthYear) {
  this.birthYear = birthYear
  this.calcAge()
 }

 // Static method
 static wave() {
  console.log(`👋👋👋`)
  console.dir(this)
 }
}

// Class Chaining
class Student3 extends Person3 {
 constructor(firstName, birthYear, course) {
  // Super always first
  super(firstName, birthYear)
  this.course = course
 }

 introduce() {
  console.log(
   `My name is ${this.firstName}, I am ${this.calcAge()} years old and I am studying ${this.course}`
  )
 }

 // Overwriting parent method
 calcAge() {
  this._age = new Date().getFullYear() - this.birthYear

  console.log(`I am ${this._age} years old but as a student, I feel more like ${this._age + 10}`)
  return this._age
 }
}

// if child has no new parameters
class Student3_1 extends Person3 {
 // Can still accept new methods
 introduce() {
  console.log(
   `My name is ${this.firstName}, I am ${this.calcAge()} years old and I am studying ${this.course}`
  )
 }
}

// Instaniate
const mark = new Person3(`Mark`, 1992)
const martha2 = new Student3_1(`Martha2`, 2012)
const martha = new Student3(`Martha`, 2012, `Computer Science`)
console.log(mark, martha, martha2)
martha.calcAge()
console.log(``)

//////////////////////////////////////////////////

// Object.create
const protoPerson = {
 // Method
 calcAge() {
  return (this.age = new Date().getFullYear() - this.birthYear)
 },

 // Properties
 init(firstName, birthYear) {
  this.firstName = firstName
  this.birthYear = birthYear
 }
}

// Class Chaining
const protoSudent = Object.create(protoPerson)

// Method declarations
protoSudent.init = function (firstName, birthYear, course) {
 protoPerson.init.call(this, firstName, birthYear)
 this.course = course
}

protoSudent.introduce = function () {
 console.log(
  `My name is ${this.firstName}, I am ${this.calcAge()} years old and I am studying ${this.course}`
 )
}

// Instaniate
const emma = Object.create(protoPerson)
const jay = Object.create(protoSudent)

emma.init(`Emma`, 1993)
jay.init(`Jay`, 1880, `Computer Science`)
console.log(emma, jay)
jay.introduce()
console.log(``) */

/* /////////////// Coding Challenge #2 09/09/24 ///////////////
class CarES6 {
 constructor(make, speed) {
  this.make = make
  this.speed = speed
 }
 accelerate() {
  console.log(`${this.make} is going at ${(this.speed += 10)}km/h`)
 }
 brake() {
  console.log(`${this.make} reduce speed and now is ${(this.speed -= 5)}km/h`)
 }
 get speedUS() {
  return this.speed / 1.6
 }
 set speedUS(velo) {
  this.speed = velo * 1.6
 }
}

const Ford = new CarES6('Ford', 120)
console.log(Ford.speedUS) // 75 > OK GET FUNCIONOU
Ford.accelerate()
Ford.brake()
Ford.speedUS = 50
console.log(Ford) // CarES6 {make: 'Ford', speed: 80} SET funcionou, ai cliando aparece o get com a divisão por 1.6 speedUS: (...) ai clica nos .. que aparece 50 */

// Aula 219 dia 10/09/24

//Person e calcage são um só. Person é um constructor function
const Person = function (firstName, birthYear) {
 this.firstName = firstName
 this.birthYear = birthYear
}

Person.prototype.calcAge = function () {
 console.log(2024 - this.birthYear)
}

//Agora Student vai herdar os dados de Person usando o call. Student também é um "constructor function", mas adiciona uma nova propriedade, course.
const Student = function (firstName, birthYear, course) {
 Person.call(this, firstName, birthYear)
 this.course = course
}

//Student.prototype = Object.create(Person.prototype) faz com que o Student.prototype herde os métodos definidos no Person.prototype (como calcAge). Isso significa que qualquer instância de Student pode usar os métodos de Person.
Student.prototype = Object.create(Person.prototype)
//Student.prototype = Person.prototype > Ver o print esse é errado

Student.prototype.introduce = function () {
 console.log(`My name is ${this.firstName} and i study ${this.course}`)
}

const mike = new Student('Mike', 1998, 'Computer science')
mike.introduce() // My name is Mike and i study Computer science
mike.calcAge() // 26

console.log(mike.__proto__) // Person {introduce: ƒ} > introduce: ƒ () > mostra que mike herda de Student.prototype, que por sua vez herda de Person.prototype.
console.log(mike.__proto__.__proto__) // {calcAge: ƒ} > constructor: ƒ (firstName, birthYear)

//agora mike, que é student, aponta para os 3 via inheritance prototype, igual o print. Mostram que mike é uma instância de Student, Person, e Object, confirmando a cadeia de herança.
console.log(mike instanceof Student) //true
console.log(mike instanceof Person) //true
console.log(mike instanceof Object) //true

//Correção do construtor: corrige o construtor do Student.prototype, garantindo que ele aponte corretamente para Student.
Student.prototype.constructor = Student
console.dir(Student.prototype.constructor) // ƒ Student(firstName, birthYear, course)
