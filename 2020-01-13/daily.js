'use strict'

const myArr = [1,2,3,4,5,6,7,8,9,10];

const forLoop = arr => {
  for (let i = 0; i < arr.length; i++) console.log(arr[i]);
};

const whileLoop = arr => {
  let counter = 0;
  while (counter < arr.length) {
    console.log(arr[counter]);
    counter++;
  }
};

const map = (arr, pntr) => {
  const mapped = [];
  arr.forEach(itm => mapped.push(pntr(itm)));
  return mapped;
};

const reduce = (arr, pntr) => {
  let accumulator = 0;
  arr.forEach(itm => {
    accumulator = pntr(accumulator, itm);
    console.log(accumulator);
  });
  return accumulator;
};

const filter = (arr, pntr) => {
  const filtered = [];
  arr.forEach(itm => {
    if (pntr(itm)) filtered.push(itm);
  });
  return filtered;
};

const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
};

let state = {};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = { ...stuff, cars: [...stuff.cars, 'Honda'] };

let newState = {
  people: ['Odie', ...people, 'Garfield'],
  newStuff: { ...stuff, cars: [...stuff.cars, 'Ford'] }
};

console.log(newPeople);

console.log(newStuff);

console.log(newState);

console.log(people);

console.log(stuff);



