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
};
restaurant.orderDelivery({
  time: '22:30',
  addres: 'Via del Sole,21',
  mainIndex: 2,
  starterIndex: 2,
});
/*
// ---------------------------------- 11/04 ----------- PARA OBJETOS
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

//-----------------------------12/04/24   Spred operator
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
restaurant.orderPasta(...ingredients);*/

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
console.log(restaurant.namez);
/*
//MINHAS ANOTAÇÕES - PARA ARRAYS 10/04
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

/*
// Data needed for a later exercise
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
