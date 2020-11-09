'use strict';

function facIter(n) {
  let total = 1;

  for (let i = n; i > 0; i--) {
    total *= i;
  }

  return total;
}

function facReq(n, total = 1) {
  if (n === 0) {
    return total;
  }

  return facReq(n - 1, total * n);
}

console.log('Iterative: ' + facIter(1));
console.log('Iterative: ' + facIter(3));
console.log('Iterative: ' + facIter(5));

console.log('Recursive: ' + facReq(1));
console.log('Recursive: ' + facReq(3));
console.log('Recursive: ' + facReq(5));