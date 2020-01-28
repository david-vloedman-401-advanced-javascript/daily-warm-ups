'use strict';

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

function map(arr, cb) {
  const mapped = [];
  arr.forEach(itm => mapped.push(cb(itm)));
  return mapped;
}

console.log(map(myArr, x => x * 4));

function filter(arr, cb) {
  const filtered = [];
  arr.forEach(itm => {
    if (cb(itm)) filtered.push(itm);
  });
  return filtered;
}

function reduce(arr, cb) {
  let acc = 0;
  arr.forEach(itm => {
    acc += cb(itm);
  });
  return acc;
}


const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
};

let state = {};

let newPeople = ['Odie', ...people, 'Garfield'];

const newStuff = {
  ...stuff,
  cars: [...stuff.cars, 'Cool Car Broh']
};

let newState = {
  people: ['Odie', ...people, 'Garfield'],
  stuff: {
    ...stuff,
    cars: [...stuff.cars, 'Broh']
  }
};



console.log(newPeople);
