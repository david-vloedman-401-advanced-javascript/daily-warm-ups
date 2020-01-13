'use strict';

const map = (arr, pnter) => {
  const mapped = [];
  arr.forEach(itm => mapped.push(pnter(itm)));
  return mapped;
};

const reduce = (arr, pnter) => {
  let accumulator = 0;
  arr.forEach(itm => {
    accumulator = pnter(accumulator, itm);    
  });
  return accumulator;
};

