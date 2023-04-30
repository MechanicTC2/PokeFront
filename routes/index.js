var express = require('express');
var router = express.Router();
const moves = require('../moves');
const playModel = require('../models/playModel');
const ai = require('../models/aiModel');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PokeFront' })
  console.log(playModel.calcDamage("charizard", "scyther", 95, "fire", "Special"));
});

router.get('/play', function(req, res) {
  //pick teams
  var team1 = [];
  var team2 = [];
  team1 = ai.teamForm();
  team2 = ai.teamForm();
  var t1hp = ((team1[0].hp + 15) * 2 * 100 / 100) + 110;
  var t2hp = ((team2[0].hp + 15) * 2 * 100 / 100) + 110;
  var moveset;
  var info;
  var move1, move2, move3, move4;

  const main = team1[0];
  const main2 = main.charAt(0).toUpperCase() + main.slice(1);
  try {
    moveset = moves[main2].moveset;
    info = Object.keys(moveset);
    move1 = info[0];
    move2 = info[1];
    move3 = info[2];
    move4 = info[3];
  }
  catch (err) {
  }
  if (team1.length != 0 && team2.length != 0) {
    res.render('game', { title: "PokeFront Battle V.S. CPU", team1: team1, team2: team2, move1: move1, move2: move2, move3: move3, move4: move4, calcDamage: playModel.calcDamage, aiMove: ai.move, moves: moves});
    }
});


module.exports = router;