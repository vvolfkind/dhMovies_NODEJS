const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize');

const sequelize = new Sequelize('movies_db', 'root', 'root', {
  dialect: 'mysql',
  host: "127.0.0.1",
  port: 8889,
  //port: 3306
});

const db = {};

fs.readdirSync(__dirname).filter(function (file) {
  return (file.indexOf(".") !== 0) && (file !== 'index.js');
}).forEach(function (file) {
  let model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;