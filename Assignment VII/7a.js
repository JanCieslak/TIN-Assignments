'use strict';

const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 3000;

const operations = {
  ADD: /^\/add/,
  SUB: /^\/sub/,
  MUL: /^\/mul/,
  DIV: /^\/div/,
};

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;

  if (req.url.match(/^\/add/)) {
    handleRequest(operations.ADD, queryObject, res);
  } else if (req.url.match(/^\/sub/)) {
    handleRequest(operations.SUB, queryObject, res);
  } else if (req.url.match(/^\/mul/)) {
    handleRequest(operations.MUL, queryObject, res);
  } else if (req.url.match(/^\/div/)) {
    handleRequest(operations.DIV, queryObject, res);
  }
});

function handleRequest(operation, queryObject, res) {
  let total = 0;
  let result = '';

  const aStr = queryObject['a'];
  const bStr = queryObject['b'];

  if (aStr === undefined || bStr === undefined) {
    res.end('Missing parameters');
    return;
  }

  const a = parseInt(aStr, 10);
  const b = parseInt(bStr, 10);

  if (isNaN(a) || isNaN(b)) {
    res.end('Wrong parameter type');
    return;
  }
    
  switch (operation) {
    case operations.ADD: 
      total = a + b;
      result += `${a} + ${b} = ${total}`;
      break;
    
      case operations.SUB: 
      total = a - b;
      result += `${a} - ${b} = ${total}`;
      break;
    
      case operations.MUL: 
      total = a * b;
      result += `${a} * ${b} = ${total}`;
      break;
    
      case operations.DIV: 
      total = a / b;
      result += `${a} / ${b} = ${total}`;
      break;
  }

  res.end(result);
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});