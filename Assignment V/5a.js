'use strict';

const object = {
  someNum: 20,
  someStr: 'Hello',

  sayHello: () => {
    console.log('hello');
  },

  sayGoodbye: () => {
    console.log('goodbye');
  },
}

function printProperties(obj) {
  for (const prop in obj) {
    console.log(`${prop} -> ${typeof obj[prop]}`);
  }
}

printProperties(object);