'use strict';

const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const ops = {
  ADD: 'ADD',
  SUB: 'SUB',
  MUL: 'MUL',
  DIV: 'DIV',
}

app.post('/calc', (req, res) => {
  const { a, b, op } = req.body;
  let result;
  let err;

  switch (op) {
    case ops.ADD: 
      result = a + b;
      break;
    case ops.SUB: 
      result = a - b;
      break;
    case ops.MUL: 
      result = a * b;
      break;
    case ops.DIV: 
      result = a / b;
      break;
    default:
      err = true;
      break;
  }

  if (err) {
    res.send({ error: 'invalid operation code' });
  } else {
    res.send({ result: result });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));