const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

const router = require('./routes.js');

// models.sequelize.sync()
// .then(function () {
//   console.log('conectado a la DB')
// })
// .catch(function (err) {
//   console.log(err)
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', router);

// app.get('/', function (req, res) {
//   console.log('app listening on port: ' + port);
//   res.send('test movies express nodejs mysql')
// });

app.listen(port, () => {
  console.log(`server levantado en puerto ${port}`);
});

