'use strict';

function orderedString(str) {
  return str.split('').sort().join('');
}

console.log('webmaster: ' + orderedString('webmaster'));