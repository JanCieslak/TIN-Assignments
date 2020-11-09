'use strict';

function whichType(obj) {
  return typeof obj;
}

const obj = {
  x: 20,
  y: 20,
};

console.log('2     - ' + whichType(2));
console.log('"str" - ' + whichType('str'));
console.log('obj   - ' + whichType(obj));