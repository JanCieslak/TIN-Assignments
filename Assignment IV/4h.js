'use strict';

function findSecondMinAndMax(array) {
  if (array.length === 0) {
    return array;
  }

  if (array.length === 1) {
    return [array[0], array[0]];
  }

  const sorted = array.sort();
  return [sorted[1], sorted[sorted.length - 2]];
}


console.log('[] second min and max: ' + findSecondMinAndMax([]));
console.log('[3, 2] second min and max: ' + findSecondMinAndMax([3, 2]));
console.log('[32, 12, 14, 63, 85] second min and max: ' + findSecondMinAndMax([32, 12, 14, 63, 85]));
console.log('[1, 2, 3] second min and max: ' + findSecondMinAndMax([1, 2, 3]));