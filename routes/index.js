var express = require('express');
var router = express.Router();
const playModel = require('../models/playModel');
const aiShit = require('../models/aiShit');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PokeFront' });
  playModel.calcDamage("charizard", 1, 1, 1, 1, 1);
});

router.get('/play', function(req, res) {
  res.redirect('https://play.pokemonshowdown.com');
  console.log(aiShit.superMoveShit(superMoveShit({"moveset": {"Hydro Pump": {"type": "Water", "category": "Special", "power": 110, "accuracy": 80}, "Ice Beam": {"type": "Ice", "category": "Special", "power": 90, "accuracy": 100}, "Acid Armor": {"type": "Poison", "category": "Status", "power": null, "accuracy": null}, "Quick Attack": {"type": "Normal", "category": "Physical", "power": 40, "accuracy": 100}}})))
});

module.exports = router;
