'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.get('/form', require('./routes/index.js').form);

app.post('/formdata', require('./routes/index.js').formdata);

app.post('/jsondata', require('./routes/index.js').jsondata);

app.listen(port, () => console.log(`Listening on port ${port}`));