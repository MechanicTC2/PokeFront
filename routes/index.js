var express = require('express');
var router = express.Router();
const playModel = require('../models/playModel');
const aiShit = require('../models/aiShit');
const pokemon = require('../pokemon.json');
const pokemon_btype = require('../pokemon_type.json');

/* GET home page. */
router.get('/', async function(req, res) {
  res.render('index', { title: 'PokeFront' })
  console.log(await playModel.calcDamage("charizard", "scyther", 1, 95, "fire"));
});

router.get('/play', function(req, res) {
  res.redirect('https://play.pokemonshowdown.com');
  console.log(aiShit.superiorEffectiveMove({"moveset": {"Hydro Pump": {"type": "Water", "category": "Special", "power": 110, "accuracy": 80}, "Ice Beam": {"type": "Ice", "category": "Special", "power": 90, "accuracy": 100}, "Acid Armor": {"type": "Poison", "category": "Status", "power": null, "accuracy": null}, "Quick Attack": {"type": "Normal", "category": "Physical", "power": 40, "accuracy": 100}}}))
  res.render('game', { title: "PokeFront Battle V.S. CPU"})
});



module.exports = router;
