var express = require('express');
var router = express.Router();
const playModel = require('../models/playModel');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PokeFront' });
  playModel.calcDamage("charizard", 1, 1, 1, 1, 1);
});

router.get('/play', function(req, res) {
  res.redirect('https://play.pokemonshowdown.com');
});

module.exports = router;
