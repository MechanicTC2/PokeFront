var express = require('express');
var router = express.Router();
const playModel = require('../models/playModel');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PokeFront' });
  console.log(playModel.calcDamage("charizard", 100, 1, 95, 105, "fire"));
});

router.get('/play', function(req, res) {
  res.redirect('https://play.pokemonshowdown.com');
});

module.exports = router;
