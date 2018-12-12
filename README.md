### dhMovies_NODEJS
NodeJS/Express/Sequelize

1 - npm install  
2 - Configurar el archivo models/index.js:  
```
const sequelize = new Sequelize('movies_db', user, pass, {
  dialect: 'mysql',
  host: "127.0.0.1",
  // MAMP default
  // port: 8889,
  // Puerto default MYSQL
  port: 3306
});
```
