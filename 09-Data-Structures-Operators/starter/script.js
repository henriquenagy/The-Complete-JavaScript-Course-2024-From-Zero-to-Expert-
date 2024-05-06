'use strict';
//-------------------------------------------05-04-2024
const restaurant = {
  namez: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, addres }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${addres} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
restaurant.orderDelivery({
  time: '22:30',
  addres: 'Via del Sole,21',
  mainIndex: 2,
  starterIndex: 2,
});*/
/* // ---------------------------------- 11/04 ----------- PARA OBJETOS
 //Somente pegando os nomes do objeto para mostrar na tela
const { namez, openingHours, categories } = restaurant;
console.log(namez, openingHours, categories);
//Dar novos nomes aos objetos anteriores
const {
  namez: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
//Mutating variables
let a = 123;
let b = 453;
const obj = { a: 23, b: 7, c: 14 }; //mesmo nome, porém outras variáveis a e b
({ a, b } = obj); //let a e b agora serão iguais aos dentro do objeto
console.log(a, b);
// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);*/
/*//-----------------------------12/04/24   Spred operator
const arr = [4, 5, 6];
const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, 3, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 3, 4, 5, 6);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copyy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Henrique';
const letters = [...str, ' ', 'M.'];
console.log(letters); //Saída: [ 'H',  'e', 'n', 'r',  'i', 'q', 'u',  'e', ' ', 'M.']
console.log(...str); // Saída: H e n r i q u e
//console.log(`${...str} Martins`); //assim não funciona se usar ${}

/*const ingredients = [
  prompt("let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Giuseppe Camole',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.namez = 'Ristorante Roma';
console.log(restaurantCopy.namez);
console.log(restaurant.namez);*/
/*//MINHAS ANOTAÇÕES - PARA ARRAYS 10/04
//Pegar dois dados do array do objeto acima, o 1o e o 3o, deixa o 2o vazio
let [first, , third] = restaurant.categories;
console.log(first, third);

//pegar todos numeros de um array
const arrays = [2, 3, 4];
const [x, y, z] = arrays;
console.log(x, y, z);

//switching variables
[first, third] = [third, first];
console.log(first, third);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested elements destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
/*// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/
/*// ---------------------------- 15-04  Rest Pattern and Parameters-------------------------------------------------------------
//Spread, 'cause on Right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr); // 3 e 4 vão ficar fora do []

//REST, beacause on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5]; //os ...others vão ficar tudo dentro de []
console.log(a, b, others);

const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);

//objects (não precisa estar na sequência, pois sat é o último dentro do objeto)
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
const x = [4, 32, 1];
add(...x);

//Using the created function orderPizza
restaurant.orderPizza('mushromm', 'onion', 'garlic', 'aspargus');

// ----------------------- Short Circuiting (&& and ||)
console.log('--------OR-------');
//Use any data type, return any data type short-circuiting
console.log(3 || 'Nagy'); //Saída: 3
console.log('' || 'Nagy'); //Saída: Nagy
console.log(true || 0); //Saída:  true
console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Saída:  Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //Saída: 23
const guests2 = restaurant.numGuests || 10;
console.log(guests2); //Saída: 23

console.log(`----------AND----------`);
console.log(0 && `Nagy`); //Saída: 0
console.log(7 && `Nagy`); //Saída:  Nagy

console.log(`Hello` && 23 && null && 'Nagy'); //Saída: null

//Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach'); //Saída: mushrooms [ 'spinach' ] usando IF
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); //Saída: mushrooms [ 'spinach' ] sem usar o IF
*/
/*//----------------- 17/04    The Nullish Coalescing Operator (??)------
'use strict';
const books = [
  { title: '1. Algorithms', onlineContent: true },
  {
    title: '2. Structure and Interpretation of Computer Programs',
    onlineContent: false,
  },
  {
    title: "3. Computer Systems: A Programmer's Perspective",
    onlineContent: false,
  },
  { title: '4. Operating System Concepts', onlineContent: false },
  { title: '5. Engineering Mathematics', onlineContent: true },
  { title: '6. The Personal MBA: Master the Art of Business' },
  { title: '7. Crafting Interpreters' },
  { title: '8. Deep Work: Rules for Focused Success in a Distracted World' },
];
for (let item of books)
  item.onlineContent ??
    console.log(`${item.title} provides no data about its online content`);
    */
/*//----------------- 17/04    Logical assignment operators ------
const rest1 = {
  name: 'Capri',
  numGuests: 1,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Najones',
};
//Nullish
rest1.numGuests ??= 4; //Retorna 1, 1ª expressão é verdadeira
rest2.numGuests ??= 69; // Retorna 69, 1ª expressão é undefined
console.log(rest1);
console.log(rest2);

//OR shortform
rest1.numGuests ||= 10; //Retorna 1
rest2.numGuests ||= 8; // Retorna 8

//AND shortform
rest1.owner &&= '1ª opção false'; //Retorna Nada , pois owner é vazio
rest2.owner &&= '1ª opção true'; // Retorna Segunda opção, pois a 1ª é true
*/
/*//---------------------------------22/04/2024 Segunda | For of loop´----------------------
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  //console.log(item);
}
console.log([...menu.entries()]);
*/
/*//--------------------------------- 23/04/204 Tuesday |  Optional Chaining (?.) ----------------------
console.log(restaurant.openingHours?.thu?.open); //Saída: 12
console.log(restaurant.openingHours?.thu?.close); //Saída: 22
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (let day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  //console.log(`On ${day}, we open at ${open}`);
}

//Nullish ?? com Optional Chaining ?. - usando function dentro do objeto
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); //Saída: [ 'Focaccia', 'Pasta' ]
///Nullish ?? com Optional Chaining ?. - Usando uma function inexistente para testar após ??
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); //Saída: Method does not exist

//Agora Optional Chaining ?. com array
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'user array empty'); //Saída: Jonas

////Agora Optional Chaining ?. com array VAZIA
const users2 = [];
console.log(users2[0]?.name ?? 'user array empty'); //Saída: user array empty*/
/*//--------------------------------- 24/04 Wednesday |  Looping Objects: Object Keys, Values and Entries ----------------------
//Object keys para criar novo array
const properties = Object.keys(restaurant.openingHours);
console.log(properties); //Saída: [ 'thu', 'fri', 'sat' ]
//For of para chamar os valores do objeto restaurant opening hours
for (const diaz of Object.keys(restaurant.openingHours)) {
  console.log(diaz); // Saída: thu  fri  sat
}
//Mesclando tudo
let openStr = `We are open on ${properties.length} days: `;
for (const dayz of properties) openStr += `${dayz}, `;
console.log(openStr); //Saída: We are open on 3 days: thu, fri, sat,*/
/* //--------------------------------- 02/05 Thursday | Sets  ------------------------------------------
const ordersSet = new Set([
  'pasta',
  'pizza',
  'risotto',
  'pizza',
  'risotto',
  'pasta',
]);
console.log(ordersSet); //Output: Set(3) { 'pasta', 'pizza', 'risotto' }

console.log(new Set('Nagys')); //Output: Set(5) { 'N', 'a', 'g', 'y', 's' }
console.log(new Set('henriquenagymartins').size); //Output: 13

console.log(ordersSet.size); //Output: 3
console.log(ordersSet.has('pizza')); //Output: true
console.log(ordersSet.has('sexylady')); //Output: false

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); //Só vai add uma vez, pois está repetido e não pode isso em Set
console.log(ordersSet); //Output: Set(4) { 'pasta', 'pizza', 'risotto', 'Garlic Bread' }

ordersSet.delete('risotto');
console.log(ordersSet); //Output: Set(3) { 'pasta', 'pizza', 'Garlic Bread' }

for (const order of ordersSet) console.log(order); //Output: pasta pizza Garlic Bread

ordersSet.clear();
console.log(ordersSet); //Output: Set(0) {}

//Deixando set em array e objeto
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

const staffInObject = new Set(staff);
console.log(staffInObject); // Output: Set(3) { 'waiter', 'chef', 'manager' }

const staffInArray = [...new Set(staff)]; //Spread operator
console.log(staffInArray); // Output: [ 'waiter', 'chef', 'manager' ]
*/
//--------------------------------- 06/05 MOndayz | Maps ------------------------------------------
/*const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); //Output: Map(3) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal'}

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are Open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name')); //Output: Classico Italiano
console.log(rest.get(true)); //Output: We are Open :D
console.log(rest.get(1)); //Output: Firenze, Italy

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //Output: We are closed :(

console.log(rest.has('categories')); //Output: true
console.log(rest.size); //Output:8
rest.delete(2);
console.log(rest.size); //Output:7

const arrz = [1, 2];
rest.set(arrz, 'Test'); //Como adicionar um array, basta criar ele fora do map
console.log(rest.get(arrz)); //Output: Test*/

//Convert object to map
const hoursMap = new Map(Object.entries(restaurant.openingHours));
//console.log(hoursMap); // Output: Map(3) { 'thu' => { open: 12, close: 22 },'fri' => { open: 11, close: 23 }, 'sat' => { open: 0, close: 24 }}

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'c'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct🎉'],
  [false, 'Try again!'],
]);

console.log(...question); //[ 'question', 'What is the best programming language in the world?' ] [ 1, 'c' ] [ 2, 'Java' ] [ 3, 'Javascript' ] [ 'correct', 3 ] [ true, 'Correct🎉' ] [ false, 'Try again!' ]
console.log(...question.keys()); //question 1 2 3 correct true false
console.log(...question.values()); //What is the best programming language in the world? c Java Javascript 3 Correct🎉 Try again!

//Quiz app
console.log(question.get('question')); //Mostra a 1a pergunta
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
} //Mostra os 3 priemiros números que são perguntas
const answer = Number(prompt('Your answer')); //Pede para o user digitar
console.log(answer);
console.log(question.get(question.get('correct') === answer)); //São dois get, um compara o correct q é 3 com o digitado pelo usuário. Sua saída será true ou false, ai o outro get externo pega esse resultado e compara com o q tem no question

console.log(...question);
console.log(...question.keys());
console.log(...question.values());
