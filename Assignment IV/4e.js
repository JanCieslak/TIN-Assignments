'use strict';

function findLongestWord(str) {
  return str.split(' ').sort((a, b) => b.length - a.length)[0];
}

console.log('Longest word: ' + findLongestWord('Write a JavaScript function that accepts a string as a parameter and find the longest word within the strin'));