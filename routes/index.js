var express = require('express');
var router = express.Router();
const playModel = require('../models/playModel');
const pokemon = require('../pokemon.json');
const pokemon_btype = require('../pokemon_type.json');
const ai = require('../models/aiShit')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PokeFront' })
  console.log(playModel.calcDamage("charizard", "scyther", 1, 95, "fire"));
});

router.get('/play', function(req, res) {
var team1 = [];
var team2 = [];
//team1 = ai.teamForm();
//team2 = ai.teamForm();
console.log(team1)
  res.render('game', { title: "PokeFront Battle V.S. CPU" })//playerTeam: team1, enemyTeam: team2})
});

module.exports = router;
