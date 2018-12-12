const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

const router = require('./routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', router);

app.listen(port, () => {
  console.log(`server levantado en puerto ${port}`);
});

