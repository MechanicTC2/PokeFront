var express = require('express');
var router = express.Router();
const playModel = require('../models/playModel');
const pokemon = require('../pokemon.json');
const pokemon_btype = require('../pokemon_type.json');

/* GET home page. */
router.get('/', async function(req, res) {
  res.render('index', { title: 'PokeFront' })
  console.log(await playModel.calcDamage("charizard", "scyther", 1, 95, "fire"));
});

router.get('/play', function(req, res) {
  res.redirect('https://play.pokemonshowdown.com');
});

module.exports = router;
