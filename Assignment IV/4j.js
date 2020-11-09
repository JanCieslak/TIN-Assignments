'use strict';

function binarySearch(numArray, item) {
  const arr = numArray.sort((a, b) => a - b);
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    
    if (arr[m] === item) {
      return m;
    }

    if (arr[m] > item) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('binary search array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] item: 4 -> index:', binarySearch(arr, 4));

console.log('binary search array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] item: 7 -> index:', binarySearch(arr, 7));

console.log('binary search array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] item: 10 -> index:', binarySearch(arr, 10));

console.log('binary search array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] item: 1 -> index:', binarySearch(arr, 1));