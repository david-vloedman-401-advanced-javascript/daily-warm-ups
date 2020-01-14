'use strict'

function forLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function whileLoop(arr) {
  let counter = 0;
  while (counter < arr.length) {
    console.log(arr[counter]);
    counter++;
  }
}

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(forLoop(myArr));
console.log(whileLoop(myArr));

function map(arr, pntr) {
  const mapped = [];
  arr.forEach(itm => mapped.push(pntr(itm)));
  return mapped;
}

function reduce(arr, pntr) {
  let acc = 0;
  arr.forEach(itm => {
    acc += pntr(itm);
  });
  return acc;
}

function filter(arr, pntr) {
  const filtered = [];
  arr.forEach(itm => {
    if (pntr(itm)) filtered.push(itm);
  });
  return filtered;
}

const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
};

let state = {
  people: ['Odie', ...people, 'Garfield'],
  stuff: {
    ...stuff,
    cars: [...stuff.cars, ['NewCar']]
  }
};

console.log(state);

let newPeople = ['Odie', ...people, 'Garfield'];

console.log(newPeople);
const newStuff = {
  ...stuff,
  cars: [...stuff.cars, 'Car']
};

console.log(newStuff);
let newState = {};


