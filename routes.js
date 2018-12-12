const express = require('express');
const router = express.Router();
const db = require('./models');

router.get('/movies', function (req, res) {
    console.log('Todas las peliculas!');
    db.Movie.findAll({include: [db.Genre]}).then(movies => {
    res.json(movies);
  });
});

router.get('/movies/:id', function (req, res) {
    db.Movie.findById(req.params.id).then(movie => {
    console.log(movie);
    res.json(movie);
  });
});










module.exports = router;