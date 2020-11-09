'use strict';

// I assume that input is correct (skipping argument checks)
function amountToCoins(amount, coins) {
  let output = [];
  let amt = amount;
  let currentCoin = 0;

  while (amt > 0) {
    if (Math.floor(amt / coins[currentCoin]) > 0) {
      output.push(coins[currentCoin]);
      amt -= coins[currentCoin];
    } else {
      if (currentCoin + 1 < coins.length) {
        currentCoin++;
      } else {
        break;
      }
    }
  }

  return output;
}

console.log('amount: 46 coins: [25, 10, 5, 2, 1]: ' + amountToCoins(46, [25, 10, 5, 2, 1]));