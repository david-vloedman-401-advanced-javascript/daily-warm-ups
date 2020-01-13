'use strict'

const myArr = [1, 2, 3, 4, 5];

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
