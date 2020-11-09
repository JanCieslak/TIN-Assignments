'use strict';

function palindrome(str) {
  str = str.replace(/\W+/g, '').toLowerCase();
  const str1 = str.substr(0, str.length / 2 + 1);
  const str2 = str.substr(str.length / 2, str.length / 2 + 1);
  
  for (let i = 0, j = str2.length - 1; i < str1.length; i++, j--) {
    if (str1[i] !== str2[j]) {
      return false;
    }
  }

  return true;
}

console.log('race car: ' + palindrome('race car'));
console.log('not a palindrome: ' + palindrome('not a palindrome'));
console.log('A man, plan, a canal. Panama: ' + palindrome('A man, a plan, a canal. Panama'));
console.log('never odd or even: ' + palindrome('never odd or even'));
console.log('almostomla: ' + palindrome('almostomla'));