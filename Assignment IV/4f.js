'use strict';

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log('1 is prime: ' + isPrime(1));
console.log('2 is prime: ' + isPrime(2));
console.log('3 is prime: ' + isPrime(3));
console.log('4 is prime: ' + isPrime(4));
console.log('5 is prime: ' + isPrime(5));
console.log('7 is prime: ' + isPrime(7));
console.log('13 is prime: ' + isPrime(13));
console.log('15 is prime: ' + isPrime(15));