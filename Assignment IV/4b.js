'use strict';

function fib(n, a = 0, b = 1) {
  if (n === 0) {
    return a;
  }

  if (n === 1) {
    return b;
  }

  return fib(n - 1, b, a + b);
}

console.log('Fib: ' + fib(0));
console.log('Fib: ' + fib(1));
console.log('Fib: ' + fib(2));
console.log('Fib: ' + fib(3));
console.log('Fib: ' + fib(4));
console.log('Fib: ' + fib(5));
console.log('Fib: ' + fib(6));
console.log('Fib: ' + fib(7));
console.log('Fib: ' + fib(8));