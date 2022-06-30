'use strict';

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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({starterIndex = 1, mainIndex = 0, address, time = '20:00'}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be 
    delivered to ${address} at the time ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  }
};

// Rest pattern and parameters


// Spread operator
/* const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; 
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array 
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); 

// Iteration: arrays, strings, maps, sets, NOT objects
const str = 'Himanshu';
const letters = [...str, '', '5.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Ladva`);

const ingredients = [
// prompt('Let\'s make pasta! Ingredients 1?'),
// prompt("Ingredient 2?"), 
// prompt("Ingerdient 3")
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'himanshu'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name); */

// destructuring object
/* restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const {name, openingHours, categories} = restaurant;
console.log(name , openingHours, categories); 

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating varibles
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14};
({a, b} = obj);
console.log(a, b);

// nested  objects
const {fri : {open : o, close : c}} = openingHours;
console.log(o, c); */
 
// destructuring Array
/* const arr = [1, 2, 3];
const a = arr[0];
const b = arr[0];
const c = arr[0];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// swap logic
// const temp = main;
// main = secondary;
// secondary = main;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return valuers from a function  
console.log(restaurant.order(2, 1));
const [first, second] = restaurant.order(2, 1);
console.log(first, second);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
const [i, , [j , k]] = nested;
console.log(i, j, k);

// Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p ,q ,r); */