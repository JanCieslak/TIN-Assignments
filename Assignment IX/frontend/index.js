'use strict';

const a = document.getElementById('a');
const b = document.getElementById('b');
const operation = document.getElementById('ops');
const calcBtn = document.getElementById('calcBtn');

const result = document.getElementById('result');

// TODO check if inputs are numbers

calcBtn.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/calc', true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const response = JSON.parse(xhr.response);
      result.innerHTML = 'Result: ' + response.result;
    }
  }

  if (isNumber(a.value) && isNumber(b.value)) {
    xhr.send(JSON.stringify({ 
      a: parseInt(a.value, 10),
      b: parseInt(b.value, 10),
      op: operation.value
    }));
  }
});

function isNumber(str) {
  if (typeof str != 'string') return false;
  return !isNaN(str) && !isNaN(parseInt(str, 10));
}