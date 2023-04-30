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
  //randomize pokemon selection
  let p1hp = ((((pokemon[pokemon1].hp + 31) * 2) * 100) / 100) + 110;
  let p2hp = ((((pokemon[pokemon2].hp + 31) * 2) * 100) / 100) + 110;
  res.render('game', { title: "PokeFront Battle V.S. CPU", p1hp, p2hp, p1, p2});
});

module.exports = router;
